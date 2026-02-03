import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Erreur webhook Stripe:", err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Mettre à jour le client avec le customerId Stripe
        if (session.customer && session.metadata?.clientId) {
          await prisma.client.update({
            where: { id: session.metadata.clientId },
            data: {
              stripeCustomerId: session.customer as string,
            },
          });
        }

        // Créer le paiement
        if (session.metadata?.clientId) {
          await prisma.payment.create({
            data: {
              clientId: session.metadata.clientId,
              amount: (session.amount_total || 0) / 100,
              status: "PAID",
              stripePaymentId: session.payment_intent as string,
              description: session.metadata.description || "Paiement initial",
              dueDate: new Date(),
              paidAt: new Date(),
            },
          });
        }
        break;
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        
        // Trouver le client par stripeCustomerId
        const client = await prisma.client.findFirst({
          where: { stripeCustomerId: invoice.customer as string },
        });

        if (client) {
          // Mettre à jour le paiement existant ou en créer un nouveau
          await prisma.payment.upsert({
            where: { stripeInvoiceId: invoice.id },
            update: {
              status: "PAID",
              paidAt: new Date(),
            },
            create: {
              clientId: client.id,
              amount: (invoice.amount_paid || 0) / 100,
              status: "PAID",
              stripeInvoiceId: invoice.id,
              description: `Facture ${invoice.number}`,
              dueDate: new Date(invoice.due_date! * 1000),
              paidAt: new Date(),
            },
          });
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        
        const client = await prisma.client.findFirst({
          where: { stripeCustomerId: invoice.customer as string },
        });

        if (client) {
          await prisma.payment.upsert({
            where: { stripeInvoiceId: invoice.id },
            update: {
              status: "FAILED",
            },
            create: {
              clientId: client.id,
              amount: (invoice.amount_due || 0) / 100,
              status: "FAILED",
              stripeInvoiceId: invoice.id,
              description: `Facture ${invoice.number}`,
              dueDate: new Date(invoice.due_date! * 1000),
            },
          });

          // Créer une notification pour l'admin
          const adminUser = await prisma.user.findFirst({
            where: { role: "ADMIN" },
          });

          if (adminUser) {
            await prisma.notification.create({
              data: {
                userId: adminUser.id,
                type: "WARNING",
                title: "Paiement échoué",
                message: `Le paiement du client ${client.id} a échoué.`,
              },
            });
          }
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Erreur traitement webhook:", error);
    return NextResponse.json(
      { error: "Erreur traitement webhook" },
      { status: 500 }
    );
  }
}
