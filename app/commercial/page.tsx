"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, StatCard } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Phone,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Calendar,
  ArrowRight,
  Users,
  Clock,
  Flame,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

// Données de démo
const stats = {
  leadsTotal: 45,
  leadsCeMois: 12,
  closes: 8,
  tauxClosing: 38,
  caGenere: 38200,
  rdvSemaine: 6,
  noShows: 2,
};

const leadsChauds = [
  { name: "Thomas Richard", ca: 145000, activite: "Avocat", rdv: "Demain 10h" },
  { name: "Julie Garcia", ca: 88000, activite: "Architecte", rdv: "Mercredi 14h" },
  { name: "Léa Robert", ca: 110000, activite: "Ostéopathe", rdv: "Jeudi 11h" },
];

const activiteRecente = [
  { type: "close", lead: "Antoine Blanc", offre: "PRO", montant: 4600, date: "Il y a 2h" },
  { type: "rdv", lead: "Emma Leroy", date: "Il y a 4h" },
  { type: "contact", lead: "Pierre Martin", date: "Il y a 6h" },
  { type: "close", lead: "Camille Noir", offre: "STARTER", montant: 3600, date: "Hier" },
];

export default function CommercialDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-dark">Mon tableau de bord</h1>
          <p className="text-gray-500 mt-1">
            Bienvenue, Alexandre. Voici votre activité du mois.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/commercial/pipeline">
            <Button>
              <Target size={18} />
              Voir le pipeline
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Leads actifs"
          value={stats.leadsTotal}
          subtitle={`+${stats.leadsCeMois} ce mois`}
          icon={<Users size={24} />}
          trend="up"
          trendValue="+15%"
        />
        <StatCard
          title="Closes ce mois"
          value={stats.closes}
          subtitle={`${stats.tauxClosing}% taux de closing`}
          icon={<CheckCircle2 size={24} />}
          trend="up"
          trendValue="+2"
        />
        <StatCard
          title="CA généré"
          value={formatCurrency(stats.caGenere)}
          subtitle="Ce mois"
          icon={<TrendingUp size={24} />}
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          title="RDV cette semaine"
          value={stats.rdvSemaine}
          subtitle={`${stats.noShows} no-shows`}
          icon={<Calendar size={24} />}
        />
      </div>

      {/* Grille leads chauds + activité */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads chauds */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="text-red-500" size={20} />
              <CardTitle>Leads chauds à traiter</CardTitle>
            </div>
            <Link href="/commercial/pipeline">
              <Button variant="ghost" size="sm">
                Voir tous
                <ArrowRight size={16} />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leadsChauds.map((lead, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-red-50/50 border border-red-100 hover:bg-red-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-semibold">
                      {lead.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium text-blue-dark">{lead.name}</p>
                      <p className="text-sm text-gray-500">
                        {lead.activite} • {formatCurrency(lead.ca)} CA
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-orange">{lead.rdv}</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" className="h-8">
                        <Phone size={14} />
                      </Button>
                      <Button size="sm" className="h-8">
                        Préparer
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activité récente */}
        <Card>
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activiteRecente.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.type === "close"
                        ? "bg-emerald-100 text-emerald-600"
                        : item.type === "rdv"
                        ? "bg-amber-100 text-amber-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {item.type === "close" ? (
                      <CheckCircle2 size={18} />
                    ) : item.type === "rdv" ? (
                      <Calendar size={18} />
                    ) : (
                      <Phone size={18} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-blue-dark">
                      {item.type === "close"
                        ? `Closé : ${item.lead}`
                        : item.type === "rdv"
                        ? `RDV effectué avec ${item.lead}`
                        : `Contact avec ${item.lead}`}
                    </p>
                    {item.offre && (
                      <p className="text-sm text-gray-500">
                        Offre {item.offre} • {formatCurrency(item.montant!)}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Objectifs */}
      <Card>
        <CardHeader>
          <CardTitle>Objectifs du mois</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Objectif closes */}
            <div className="p-4 rounded-xl bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">Closes</span>
                <span className="text-lg font-bold text-blue-dark">8 / 12</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full">
                <div
                  className="h-3 bg-emerald-500 rounded-full"
                  style={{ width: "67%" }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">67% de l'objectif</p>
            </div>

            {/* Objectif CA */}
            <div className="p-4 rounded-xl bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">CA généré</span>
                <span className="text-lg font-bold text-blue-dark">38 200€ / 50 000€</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full">
                <div
                  className="h-3 bg-orange rounded-full"
                  style={{ width: "76%" }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">76% de l'objectif</p>
            </div>

            {/* Objectif RDV */}
            <div className="p-4 rounded-xl bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">RDV effectués</span>
                <span className="text-lg font-bold text-blue-dark">18 / 20</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full">
                <div
                  className="h-3 bg-purple-500 rounded-full"
                  style={{ width: "90%" }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">90% de l'objectif</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
