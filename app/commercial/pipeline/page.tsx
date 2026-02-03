"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  MoreVertical,
  Flame,
  Thermometer,
  Snowflake,
  Euro,
  Building2,
  Clock,
  User,
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

// Types
interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  temperature: "HOT" | "WARM" | "COLD";
  ca?: number;
  activite?: string;
  source?: string;
  rdvDate?: string;
  notes?: string;
  createdAt: string;
}

// Colonnes du pipeline
const pipelineColumns = [
  { id: 0, name: "Nouveau", color: "bg-blue-500" },
  { id: 1, name: "Contacté", color: "bg-purple-500" },
  { id: 2, name: "Qualifié", color: "bg-cyan-500" },
  { id: 3, name: "RDV planifié", color: "bg-amber-500" },
  { id: 4, name: "RDV effectué", color: "bg-orange" },
  { id: 5, name: "Proposition", color: "bg-indigo-500" },
  { id: 6, name: "Négociation", color: "bg-pink-500" },
  { id: 7, name: "Closé", color: "bg-emerald-500" },
];

// Données de démo
const initialLeads: Record<number, Lead[]> = {
  0: [
    { id: "1", name: "Marie Durand", email: "marie@example.com", phone: "06 12 34 56 78", temperature: "HOT", ca: 85000, activite: "Consultante RH", source: "Google", createdAt: "2026-01-28" },
    { id: "2", name: "Pierre Martin", email: "pierre@example.com", temperature: "WARM", ca: 65000, activite: "Développeur", source: "Meta", createdAt: "2026-01-27" },
    { id: "3", name: "Sophie Bernard", email: "sophie@example.com", temperature: "COLD", activite: "Coach", source: "Referral", createdAt: "2026-01-26" },
  ],
  1: [
    { id: "4", name: "Jean Dupont", email: "jean@example.com", phone: "06 98 76 54 32", temperature: "HOT", ca: 120000, activite: "Agent immobilier", createdAt: "2026-01-25" },
    { id: "5", name: "Claire Petit", email: "claire@example.com", temperature: "WARM", ca: 55000, activite: "Graphiste", createdAt: "2026-01-24" },
  ],
  2: [
    { id: "6", name: "Lucas Moreau", email: "lucas@example.com", temperature: "HOT", ca: 95000, activite: "Formateur", createdAt: "2026-01-23" },
  ],
  3: [
    { id: "7", name: "Emma Leroy", email: "emma@example.com", phone: "06 11 22 33 44", temperature: "HOT", ca: 78000, activite: "Naturopathe", rdvDate: "2026-02-01 10:00", createdAt: "2026-01-22" },
    { id: "8", name: "Hugo Simon", email: "hugo@example.com", temperature: "WARM", ca: 68000, activite: "Photographe", rdvDate: "2026-02-02 14:00", createdAt: "2026-01-21" },
  ],
  4: [
    { id: "9", name: "Léa Robert", email: "lea@example.com", temperature: "HOT", ca: 110000, activite: "Ostéopathe", createdAt: "2026-01-20" },
  ],
  5: [
    { id: "10", name: "Thomas Richard", email: "thomas@example.com", temperature: "HOT", ca: 145000, activite: "Avocat", createdAt: "2026-01-19" },
  ],
  6: [
    { id: "11", name: "Julie Garcia", email: "julie@example.com", temperature: "HOT", ca: 88000, activite: "Architecte", notes: "Négo sur les échéances", createdAt: "2026-01-18" },
  ],
  7: [
    { id: "12", name: "Antoine Blanc", email: "antoine@example.com", temperature: "HOT", ca: 92000, activite: "Kiné", createdAt: "2026-01-17" },
    { id: "13", name: "Camille Noir", email: "camille@example.com", temperature: "HOT", ca: 76000, activite: "Infirmière", createdAt: "2026-01-16" },
  ],
};

// Composant Lead Card
function LeadCard({
  lead,
  onMoveLeft,
  onMoveRight,
  canMoveLeft,
  canMoveRight,
}: {
  lead: Lead;
  onMoveLeft: () => void;
  onMoveRight: () => void;
  canMoveLeft: boolean;
  canMoveRight: boolean;
}) {
  const temperatureConfig = {
    HOT: { icon: Flame, color: "text-red-500", bg: "bg-red-50", border: "border-red-200" },
    WARM: { icon: Thermometer, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200" },
    COLD: { icon: Snowflake, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
  };

  const temp = temperatureConfig[lead.temperature];
  const TempIcon = temp.icon;

  return (
    <div className={cn("bg-white rounded-xl border p-4 shadow-sm hover:shadow-md transition-all", temp.border)}>
      {/* Header avec température */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", temp.bg)}>
            <TempIcon size={16} className={temp.color} />
          </div>
          <div>
            <h4 className="font-semibold text-blue-dark text-sm">{lead.name}</h4>
            <p className="text-xs text-gray-500">{lead.activite}</p>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreVertical size={16} className="text-gray-400" />
        </button>
      </div>

      {/* Infos */}
      <div className="space-y-2 mb-3">
        {lead.ca && (
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Euro size={14} />
            <span>{formatCurrency(lead.ca)} CA</span>
          </div>
        )}
        {lead.rdvDate && (
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Calendar size={14} />
            <span>{lead.rdvDate}</span>
          </div>
        )}
        {lead.source && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Building2 size={14} />
            <span>{lead.source}</span>
          </div>
        )}
      </div>

      {/* Actions rapides */}
      <div className="flex items-center gap-2 mb-3">
        {lead.phone && (
          <a
            href={`tel:${lead.phone}`}
            className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
            title="Appeler"
          >
            <Phone size={14} />
          </a>
        )}
        <a
          href={`mailto:${lead.email}`}
          className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          title="Envoyer email"
        >
          <Mail size={14} />
        </a>
        <button
          className="p-2 rounded-lg bg-orange/10 text-orange hover:bg-orange/20 transition-colors"
          title="Planifier RDV"
        >
          <Calendar size={14} />
        </button>
      </div>

      {/* Boutons déplacement */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMoveLeft}
          disabled={!canMoveLeft}
          className="text-xs"
        >
          <ChevronLeft size={16} />
          Préc
        </Button>
        <span className="text-xs text-gray-400">
          <Clock size={12} className="inline mr-1" />
          {new Date(lead.createdAt).toLocaleDateString("fr-FR")}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={onMoveRight}
          disabled={!canMoveRight}
          className="text-xs"
        >
          Suiv
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}

export default function PipelinePage() {
  const [leads, setLeads] = useState(initialLeads);

  const moveLead = (leadId: string, fromColumn: number, toColumn: number) => {
    if (toColumn < 0 || toColumn > 7) return;

    const lead = leads[fromColumn].find((l) => l.id === leadId);
    if (!lead) return;

    setLeads((prev) => ({
      ...prev,
      [fromColumn]: prev[fromColumn].filter((l) => l.id !== leadId),
      [toColumn]: [...prev[toColumn], lead],
    }));
  };

  const getTotalLeads = () => {
    return Object.values(leads).reduce((sum, arr) => sum + arr.length, 0);
  };

  const getTotalCA = () => {
    return Object.values(leads)
      .flat()
      .reduce((sum, lead) => sum + (lead.ca || 0), 0);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-dark">Pipeline commercial</h1>
          <p className="text-gray-500 mt-1">
            {getTotalLeads()} leads • {formatCurrency(getTotalCA())} CA potentiel
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <User size={18} />
            Filtrer par closer
          </Button>
          <Button>
            + Ajouter un lead
          </Button>
        </div>
      </div>

      {/* Pipeline Kanban */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {pipelineColumns.map((column) => (
          <div
            key={column.id}
            className="flex-shrink-0 w-72"
          >
            {/* Header colonne */}
            <div className="flex items-center gap-2 mb-4">
              <div className={cn("w-3 h-3 rounded-full", column.color)} />
              <h3 className="font-semibold text-blue-dark">{column.name}</h3>
              <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                {leads[column.id]?.length || 0}
              </span>
            </div>

            {/* Cards */}
            <div className="space-y-3">
              {leads[column.id]?.map((lead) => (
                <LeadCard
                  key={lead.id}
                  lead={lead}
                  onMoveLeft={() => moveLead(lead.id, column.id, column.id - 1)}
                  onMoveRight={() => moveLead(lead.id, column.id, column.id + 1)}
                  canMoveLeft={column.id > 0}
                  canMoveRight={column.id < 7}
                />
              ))}

              {/* Placeholder si vide */}
              {(!leads[column.id] || leads[column.id].length === 0) && (
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center text-gray-400 text-sm">
                  Aucun lead
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
