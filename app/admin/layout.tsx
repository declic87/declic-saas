"use client";

import React from "react";
import { Sidebar } from "@/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = {
    name: "Jérôme Jonnard",
    email: "jerome@declic-entrepreneurs.fr",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="admin" userName={user.name} userEmail={user.email} />
      <main className="ml-64 min-h-screen">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
