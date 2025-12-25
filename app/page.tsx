"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import useRedirectIfAuth from "@/lib/useRedirectIfAuth";

export default function HomePage() {
  useRedirectIfAuth();
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Inventory Intelligence
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          A smart inventory management system that helps businesses
          track stock, understand demand, and make
          data-driven reorder decisions.
        </p>

        <div className="flex gap-4">
          <Link href="/login">
            <Button size="lg">Login</Button>
          </Link>

          <Link href="/register">
            <Button size="lg" variant="outline">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16 px-6">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          <Feature
            title="Inventory Management"
            description="Manage products, track stock levels, and organize SKUs in one place."
          />
          <Feature
            title="Reorder Intelligence"
            description="Automatically calculate when and how much to reorder based on real sales data."
          />
          <Feature
            title="CSV Import"
            description="Quickly onboard inventory using CSV uploads instead of manual entry."
          />
          <Feature
            title="Explainable Decisions"
            description="Understand why a reorder is recommended with clear, human-readable logic."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        Built as an inventory intelligence system for modern businesses.
      </footer>
    </main>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-background p-6 rounded-lg border">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
