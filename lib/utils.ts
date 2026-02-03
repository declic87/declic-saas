import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatDateShort(date: Date | string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

export function formatDateTime(date: Date | string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function calculateIR(revenuImposable: number, parts: number = 1): number {
  // Barème IR 2026
  const tranches = [
    { min: 0, max: 11294, taux: 0 },
    { min: 11295, max: 28797, taux: 0.11 },
    { min: 28798, max: 82341, taux: 0.30 },
    { min: 82342, max: 177106, taux: 0.41 },
    { min: 177107, max: Infinity, taux: 0.45 },
  ];

  const quotient = revenuImposable / parts;
  let impot = 0;

  for (const tranche of tranches) {
    if (quotient > tranche.min) {
      const base = Math.min(quotient, tranche.max) - tranche.min;
      impot += base * tranche.taux;
    }
  }

  return Math.round(impot * parts);
}

export function calculateIS(benefice: number): number {
  // IS 2026 : 15% jusqu'à 42 500€, puis 25%
  if (benefice <= 0) return 0;
  if (benefice <= 42500) return Math.round(benefice * 0.15);
  return Math.round(42500 * 0.15 + (benefice - 42500) * 0.25);
}

export function calculateIK(km: number, cv: number): number {
  // Barème IK 2026
  const bareme: Record<number, { coef: number; add: number }> = {
    3: { coef: 0.529, add: 0 },
    4: { coef: 0.606, add: 0 },
    5: { coef: 0.636, add: 0 },
    6: { coef: 0.665, add: 0 },
    7: { coef: 0.697, add: 0 },
  };

  // Si km > 5000, formule différente
  if (km <= 5000) {
    const cvCapped = Math.min(Math.max(cv, 3), 7);
    return Math.round(km * bareme[cvCapped].coef);
  } else if (km <= 20000) {
    const coeffs: Record<number, { coef: number; add: number }> = {
      3: { coef: 0.316, add: 1065 },
      4: { coef: 0.340, add: 1330 },
      5: { coef: 0.357, add: 1395 },
      6: { coef: 0.374, add: 1457 },
      7: { coef: 0.394, add: 1515 },
    };
    const cvCapped = Math.min(Math.max(cv, 3), 7);
    return Math.round(km * coeffs[cvCapped].coef + coeffs[cvCapped].add);
  } else {
    const coeffs: Record<number, number> = {
      3: 0.370,
      4: 0.407,
      5: 0.427,
      6: 0.447,
      7: 0.470,
    };
    const cvCapped = Math.min(Math.max(cv, 3), 7);
    return Math.round(km * coeffs[cvCapped]);
  }
}

export function calculateCotisationsMicro(ca: number, type: "BNC" | "BIC_SERVICES" | "BIC_VENTES"): number {
  const taux: Record<string, number> = {
    BNC: 0.22,
    BIC_SERVICES: 0.22,
    BIC_VENTES: 0.128,
  };
  return Math.round(ca * taux[type]);
}

export function calculateAbattementMicro(ca: number, type: "BNC" | "BIC_SERVICES" | "BIC_VENTES"): number {
  const abattements: Record<string, number> = {
    BNC: 0.34,
    BIC_SERVICES: 0.50,
    BIC_VENTES: 0.71,
  };
  return Math.round(ca * abattements[type]);
}

export const statusColors: Record<string, string> = {
  NOUVEAU: "bg-blue-100 text-blue-700",
  CONTACTE: "bg-purple-100 text-purple-700",
  QUALIFIE: "bg-cyan-100 text-cyan-700",
  RDV_PLANIFIE: "bg-amber-100 text-amber-700",
  RDV_EFFECTUE: "bg-orange-100 text-orange-700",
  PROPOSITION: "bg-indigo-100 text-indigo-700",
  NEGOCIE: "bg-pink-100 text-pink-700",
  CLOSE: "bg-emerald-100 text-emerald-700",
  PERDU: "bg-red-100 text-red-700",
};

export const temperatureColors: Record<string, string> = {
  HOT: "bg-red-100 text-red-700 border-red-200",
  WARM: "bg-amber-100 text-amber-700 border-amber-200",
  COLD: "bg-blue-100 text-blue-700 border-blue-200",
};
