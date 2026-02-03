"use client";

import React from "react";
import { Sidebar } from "@/components/ui/sidebar";

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = {
    name: "Alexandre Martin",
    email: "alexandre@declic-entrepreneurs.fr",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="commercial" userName={user.name} userEmail={user.email} />
      <main className="ml-64 min-h-screen">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
