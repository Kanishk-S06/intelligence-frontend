"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/auth";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    // Initial check
    checkAuth();

    // Listen for login/logout in same tab
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  // Re-check auth on route change
  useEffect(() => {
    checkAuth();
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1
        className="font-semibold text-lg cursor-pointer"
        onClick={() => router.push(isLoggedIn ? "/dashboard" : "/")}
      >
        Inventory Intelligence
      </h1>

      {isLoggedIn && (
        <div className="flex gap-4 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/inventory">Inventory</Link>
          <Link href="/reorder">Reorder</Link>

          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
}
