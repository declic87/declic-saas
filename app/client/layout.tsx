"use client";

import React from "react";
import { Sidebar } from "@/components/ui/sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Récupérer les infos utilisateur depuis Supabase/Context
  const user = {
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="client" userName={user.name} userEmail={user.email} />
      <main className="ml-64 min-h-screen">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
