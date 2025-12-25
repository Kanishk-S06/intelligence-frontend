"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/auth";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="font-semibold text-lg">
        Inventory Intelligence
      </h1>

      <div className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/inventory">Inventory</Link>
        <Link href="/reorder">Reorder</Link>

        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>
    </nav>
  );
}
