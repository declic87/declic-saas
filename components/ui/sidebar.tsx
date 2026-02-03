"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { cn, getInitials } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Target,
  CreditCard,
  Calendar,
  FileText,
  Settings,
  LogOut,
  BarChart3,
  UserCheck,
  Phone,
  CheckCircle,
  XCircle,
  Video,
  Calculator,
  MessageSquare,
  Upload,
  Briefcase,
  ClipboardList,
  UserCog,
  RefreshCw,
} from "lucide-react";

type Role = "admin" | "commercial" | "setter" | "expert" | "client";

interface SidebarProps {
  role: Role;
  userName: string;
  userEmail: string;
  userPlan?: string;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

const navItemsByRole: Record<Role, NavItem[]> = {
  admin: [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Pipeline", href: "/admin/pipeline", icon: Target },
    { label: "Clients", href: "/admin/clients", icon: Users },
    { label: "Équipe", href: "/admin/equipe", icon: UserCog },
    { label: "Experts", href: "/admin/experts", icon: Briefcase },
    { label: "Paiements", href: "/admin/paiements", icon: CreditCard },
    { label: "Remboursements", href: "/admin/remboursements", icon: RefreshCw },
    { label: "Tâches", href: "/admin/taches", icon: ClipboardList },
    { label: "Agendas", href: "/admin/agendas", icon: Calendar },
    { label: "Statistiques", href: "/admin/stats", icon: BarChart3 },
  ],
  commercial: [
    { label: "Dashboard", href: "/commercial", icon: LayoutDashboard },
    { label: "Pipeline", href: "/commercial/pipeline", icon: Target },
    { label: "Mes leads", href: "/commercial/leads", icon: Users },
    { label: "No-shows", href: "/commercial/no-shows", icon: XCircle, badge: 3 },
    { label: "Non closés", href: "/commercial/non-closes", icon: Phone },
    { label: "Statistiques", href: "/commercial/stats", icon: BarChart3 },
    { label: "Mon équipe", href: "/commercial/equipe", icon: UserCog },
    { label: "Onboarding", href: "/commercial/onboarding", icon: UserCheck },
    { label: "Scripts", href: "/commercial/scripts", icon: FileText },
  ],
  setter: [
    { label: "Dashboard", href: "/setter", icon: LayoutDashboard },
    { label: "No-shows", href: "/setter/no-shows", icon: XCircle, badge: 5 },
    { label: "Mes RDV", href: "/setter/rdv", icon: Calendar },
    { label: "Statistiques", href: "/setter/stats", icon: BarChart3 },
  ],
  expert: [
    { label: "Dashboard", href: "/expert", icon: LayoutDashboard },
    { label: "Mes clients", href: "/expert/clients", icon: Users },
    { label: "Agenda", href: "/expert/agenda", icon: Calendar },
    { label: "Tâches", href: "/expert/taches", icon: ClipboardList },
    { label: "Documents", href: "/expert/documents", icon: FileText },
    { label: "Statistiques", href: "/expert/stats", icon: BarChart3 },
  ],
  client: [
    { label: "Mon espace", href: "/client", icon: LayoutDashboard },
    { label: "Mon dossier", href: "/client/dossier", icon: FileText },
    { label: "Paiements", href: "/client/paiements", icon: CreditCard },
    { label: "Documents", href: "/client/documents", icon: FileText },
    { label: "Justificatifs", href: "/client/justificatifs", icon: Upload, badge: 2 },
    { label: "Simulateurs", href: "/client/simulateurs", icon: Calculator },
    { label: "Vidéos", href: "/client/videos", icon: Video },
    { label: "Messages", href: "/client/messages", icon: MessageSquare },
  ],
};

export function Sidebar({ role, userName, userEmail, userPlan }: SidebarProps) {
  const pathname = usePathname();
  const navItems = navItemsByRole[role];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col overflow-y-auto sidebar-nav">
      {/* Logo */}
      <div className="p-6">
        <Logo size="md" variant="light" />
      </div>

      {/* User Box */}
      <div className="mx-4 mb-6 user-box">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-sm">
            {getInitials(userName)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white text-sm truncate">{userName}</p>
            <p className="text-xs text-white/60 truncate">{userEmail}</p>
          </div>
        </div>
        {userPlan && (
          <span className="user-plan">{userPlan}</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <p className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-3 px-3">
          Navigation
        </p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== `/${role}` && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "sidebar-link",
                    isActive && "active"
                  )}
                >
                  <Icon size={20} className="opacity-90" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="bg-danger text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Settings & Logout */}
      <div className="p-4 border-t border-white/10">
        <Link
          href={`/${role}/settings`}
          className="sidebar-link mb-2"
        >
          <Settings size={20} className="opacity-90" />
          <span>Paramètres</span>
        </Link>
        <button
          onClick={() => {
            // TODO: Implémenter la déconnexion
            console.log("Déconnexion");
          }}
          className="sidebar-link w-full text-left hover:bg-danger/20 hover:text-white"
        >
          <LogOut size={20} className="opacity-90" />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
