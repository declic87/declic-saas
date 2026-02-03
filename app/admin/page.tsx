"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, StatCard } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Euro,
  TrendingUp,
  Calendar,
  Target,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  UserCheck,
  Phone,
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

// Données de démo
const kpisData = {
  mrr: 24800,
  mrrTrend: 12.5,
  clientsActifs: 156,
  clientsTrend: 8,
  tauxConversion: 34.2,
  conversionTrend: -2.1,
  rdvSemaine: 28,
  rdvTrend: 5,
};

const pipelineStats = [
  { stage: "Nouveau", count: 45, color: "bg-blue-500" },
  { stage: "Contacté", count: 32, color: "bg-purple-500" },
  { stage: "Qualifié", count: 28, color: "bg-cyan-500" },
  { stage: "RDV planifié", count: 18, color: "bg-amber-500" },
  { stage: "RDV effectué", count: 12, color: "bg-orange-500" },
  { stage: "Proposition", count: 8, color: "bg-indigo-500" },
  { stage: "Négociation", count: 5, color: "bg-pink-500" },
  { stage: "Closé", count: 24, color: "bg-emerald-500" },
];

const recentClients = [
  { name: "Sophie Martin", offre: "PRO", date: "Aujourd'hui", montant: 4600 },
  { name: "Marc Dubois", offre: "STARTER", date: "Hier", montant: 3600 },
  { name: "Julie Leroy", offre: "EXPERT", date: "Il y a 2 jours", montant: 6600 },
  { name: "Thomas Bernard", offre: "PRO", date: "Il y a 3 jours", montant: 4600 },
];

const teamPerformance = [
  { name: "Alexandre", role: "Closer", leads: 45, closes: 18, taux: 40 },
  { name: "Marine", role: "Closer", leads: 38, closes: 14, taux: 37 },
  { name: "Nicolas", role: "Closer", leads: 42, closes: 12, taux: 29 },
  { name: "Sarah", role: "Setter", rdvPoses: 65, showUp: 52, taux: 80 },
  { name: "Lucas", role: "Setter", rdvPoses: 58, showUp: 45, taux: 78 },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-dark">Tableau de bord</h1>
          <p className="text-gray-500 mt-1">
            Vue d'ensemble de l'activité DÉCLIC Entrepreneurs
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar size={18} />
            Ce mois
          </Button>
          <Button>
            <Target size={18} />
            Voir le pipeline
          </Button>
        </div>
      </div>

      {/* KPIs principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange/20 to-transparent rounded-bl-full" />
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">MRR</p>
                <p className="text-3xl font-bold text-blue-dark mt-2">
                  {formatCurrency(kpisData.mrr)}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <ArrowUpRight size={16} className="text-emerald-500" />
                  <span className="text-sm text-emerald-600 font-medium">
                    +{kpisData.mrrTrend}%
                  </span>
                  <span className="text-sm text-gray-400">vs mois dernier</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center">
                <Euro size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full" />
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Clients actifs</p>
                <p className="text-3xl font-bold text-blue-dark mt-2">
                  {kpisData.clientsActifs}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <ArrowUpRight size={16} className="text-emerald-500" />
                  <span className="text-sm text-emerald-600 font-medium">
                    +{kpisData.clientsTrend}
                  </span>
                  <span className="text-sm text-gray-400">ce mois</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Users size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full" />
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Taux conversion</p>
                <p className="text-3xl font-bold text-blue-dark mt-2">
                  {kpisData.tauxConversion}%
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <ArrowDownRight size={16} className="text-red-500" />
                  <span className="text-sm text-red-600 font-medium">
                    {kpisData.conversionTrend}%
                  </span>
                  <span className="text-sm text-gray-400">vs mois dernier</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full" />
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">RDV cette semaine</p>
                <p className="text-3xl font-bold text-blue-dark mt-2">
                  {kpisData.rdvSemaine}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <ArrowUpRight size={16} className="text-emerald-500" />
                  <span className="text-sm text-emerald-600 font-medium">
                    +{kpisData.rdvTrend}
                  </span>
                  <span className="text-sm text-gray-400">vs semaine dernière</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                <Calendar size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline overview */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Pipeline commercial</CardTitle>
          <Link href="/admin/pipeline">
            <Button variant="ghost" size="sm">
              Voir détail
              <ArrowRight size={16} />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 h-8 rounded-lg overflow-hidden">
            {pipelineStats.map((stage, index) => (
              <div
                key={index}
                className={`${stage.color} relative group cursor-pointer transition-all hover:opacity-80`}
                style={{
                  width: `${(stage.count / pipelineStats.reduce((a, b) => a + b.count, 0)) * 100}%`,
                  minWidth: "40px",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {stage.count}
                  </span>
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    {stage.stage}: {stage.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {pipelineStats.map((stage, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                <span className="text-sm text-gray-600">{stage.stage}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Grille clients récents + performance équipe */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Clients récents */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Clients récents</CardTitle>
            <Link href="/admin/clients">
              <Button variant="ghost" size="sm">
                Voir tous
                <ArrowRight size={16} />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentClients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange/10 text-orange flex items-center justify-center font-semibold">
                      {client.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium text-blue-dark">{client.name}</p>
                      <p className="text-sm text-gray-500">{client.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-orange/10 text-orange">
                      {client.offre}
                    </span>
                    <p className="text-sm font-medium text-blue-dark mt-1">
                      {formatCurrency(client.montant)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance équipe */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Performance équipe</CardTitle>
            <Link href="/admin/equipe">
              <Button variant="ghost" size="sm">
                Gérer
                <ArrowRight size={16} />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamPerformance.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        member.role === "Closer"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-cyan-100 text-cyan-600"
                      }`}
                    >
                      {member.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-blue-dark">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {member.role === "Closer" ? (
                      <>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-blue-dark">
                            {member.leads}
                          </p>
                          <p className="text-xs text-gray-500">Leads</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-emerald-600">
                            {member.closes}
                          </p>
                          <p className="text-xs text-gray-500">Closés</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-blue-dark">
                            {member.rdvPoses}
                          </p>
                          <p className="text-xs text-gray-500">RDV posés</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-emerald-600">
                            {member.showUp}
                          </p>
                          <p className="text-xs text-gray-500">Show-up</p>
                        </div>
                      </>
                    )}
                    <div className="w-16">
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div
                          className={`h-2 rounded-full ${
                            member.taux >= 35
                              ? "bg-emerald-500"
                              : member.taux >= 25
                              ? "bg-amber-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${member.taux}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-1">
                        {member.taux}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
