"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, StatCard } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Calendar,
  CreditCard,
  Calculator,
  Video,
  CheckCircle2,
  Circle,
  Clock,
  ArrowRight,
  Star,
  Upload,
  MessageSquare,
} from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

// Données de démo
const clientData = {
  name: "Jean Dupont",
  offre: "PRO",
  etape: 3,
  progression: 42,
  expert: {
    name: "Marie Laurent",
    avatar: "ML",
    specialite: "Optimisation fiscale SASU",
  },
  prochainRdv: {
    date: new Date("2026-02-15T10:00:00"),
    type: "Suivi mensuel",
  },
  paiements: {
    total: 4600,
    paye: 2300,
    prochaine: {
      montant: 575,
      date: new Date("2026-02-01"),
    },
  },
  documentsEnAttente: 2,
};

const etapesDossier = [
  { id: 1, label: "Diagnostic initial", status: "done" },
  { id: 2, label: "Stratégie validée", status: "done" },
  { id: 3, label: "Documents reçus", status: "current" },
  { id: 4, label: "Création société", status: "pending" },
  { id: 5, label: "Immatriculation", status: "pending" },
  { id: 6, label: "Comptabilité", status: "pending" },
  { id: 7, label: "Optimisation active", status: "pending" },
];

export default function ClientDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-dark">
            Bonjour, {clientData.name.split(" ")[0]} 👋
          </h1>
          <p className="text-gray-500 mt-1">
            Bienvenue dans votre espace DÉCLIC
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <MessageSquare size={18} />
            Contacter mon expert
          </Button>
          <Button>
            <Calendar size={18} />
            Planifier un RDV
          </Button>
        </div>
      </div>

      {/* Progression du dossier */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-orange/5 to-transparent border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Progression de votre dossier</CardTitle>
              <p className="text-gray-500 text-sm mt-1">
                Offre {clientData.offre} • Étape {clientData.etape}/7
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-orange">
                {clientData.progression}%
              </p>
              <p className="text-sm text-gray-500">complété</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {/* Barre de progression */}
          <div className="relative mb-8">
            <div className="h-2 bg-gray-100 rounded-full">
              <div
                className="h-2 bg-gradient-to-r from-orange to-orange-light rounded-full transition-all duration-500"
                style={{ width: `${clientData.progression}%` }}
              />
            </div>
          </div>

          {/* Étapes */}
          <div className="grid grid-cols-7 gap-2">
            {etapesDossier.map((etape) => (
              <div key={etape.id} className="text-center">
                <div
                  className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 transition-all ${
                    etape.status === "done"
                      ? "bg-emerald-100 text-emerald-600"
                      : etape.status === "current"
                      ? "bg-orange text-white ring-4 ring-orange/20"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {etape.status === "done" ? (
                    <CheckCircle2 size={20} />
                  ) : etape.status === "current" ? (
                    <Clock size={20} />
                  ) : (
                    <Circle size={20} />
                  )}
                </div>
                <p
                  className={`text-xs font-medium ${
                    etape.status === "current"
                      ? "text-orange"
                      : etape.status === "done"
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  {etape.label}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Prochain RDV"
          value={formatDate(clientData.prochainRdv.date)}
          subtitle={clientData.prochainRdv.type}
          icon={<Calendar size={24} />}
        />
        <StatCard
          title="Documents en attente"
          value={clientData.documentsEnAttente}
          subtitle="à uploader"
          icon={<Upload size={24} />}
        />
        <StatCard
          title="Paiements"
          value={`${formatCurrency(clientData.paiements.paye)} / ${formatCurrency(clientData.paiements.total)}`}
          subtitle={`Prochain : ${formatCurrency(clientData.paiements.prochaine.montant)}`}
          icon={<CreditCard size={24} />}
        />
        <StatCard
          title="Mon expert"
          value={clientData.expert.name}
          subtitle={clientData.expert.specialite}
          icon={<Star size={24} />}
        />
      </div>

      {/* Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Uploader documents */}
        <Link href="/client/justificatifs">
          <Card className="group cursor-pointer hover:shadow-lg hover:border-orange/30 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-dark group-hover:text-orange transition-colors">
                    Mes justificatifs
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {clientData.documentsEnAttente} document(s) en attente
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-gray-300 group-hover:text-orange group-hover:translate-x-1 transition-all"
                />
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Simulateurs */}
        <Link href="/client/simulateurs">
          <Card className="group cursor-pointer hover:shadow-lg hover:border-orange/30 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Calculator size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-dark group-hover:text-purple-600 transition-colors">
                    Simulateurs
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Calculez vos économies
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-gray-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all"
                />
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Vidéos formations */}
        <Link href="/client/videos">
          <Card className="group cursor-pointer hover:shadow-lg hover:border-orange/30 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <Video size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-dark group-hover:text-cyan-600 transition-colors">
                    Vidéos formation
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Tutoriels et guides pratiques
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-gray-300 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all"
                />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Section Expert */}
      <Card>
        <CardHeader>
          <CardTitle>Votre expert dédié</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange to-orange-dark text-white flex items-center justify-center text-2xl font-bold">
              {clientData.expert.avatar}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-dark">
                {clientData.expert.name}
              </h3>
              <p className="text-gray-500">{clientData.expert.specialite}</p>
              <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">5.0 (12 avis)</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <MessageSquare size={18} />
                Message
              </Button>
              <Button>
                <Calendar size={18} />
                Prendre RDV
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline paiements */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Mes paiements</CardTitle>
          <Link href="/client/paiements">
            <Button variant="ghost" size="sm">
              Voir tout
              <ArrowRight size={16} />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

            {/* Échéances */}
            {[
              { date: "15 Jan 2026", montant: 1150, status: "paid" },
              { date: "15 Fév 2026", montant: 1150, status: "paid" },
              { date: "15 Mar 2026", montant: 1150, status: "pending" },
              { date: "15 Avr 2026", montant: 1150, status: "upcoming" },
            ].map((echeance, index) => (
              <div key={index} className="relative pl-12 pb-6 last:pb-0">
                <div
                  className={`absolute left-2 w-5 h-5 rounded-full border-2 ${
                    echeance.status === "paid"
                      ? "bg-emerald-500 border-emerald-500"
                      : echeance.status === "pending"
                      ? "bg-orange border-orange"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {echeance.status === "paid" && (
                    <CheckCircle2 size={16} className="text-white -mt-0.5 -ml-0.5" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-blue-dark">
                      Échéance {index + 1}/4
                    </p>
                    <p className="text-sm text-gray-500">{echeance.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-dark">
                      {formatCurrency(echeance.montant)}
                    </p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        echeance.status === "paid"
                          ? "bg-emerald-100 text-emerald-700"
                          : echeance.status === "pending"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {echeance.status === "paid"
                        ? "Payé"
                        : echeance.status === "pending"
                        ? "En attente"
                        : "À venir"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
