"use client";

import { useEffect, useState } from "react";
import Protected from "@/components/Protected";
import { apiRequest } from "@/lib/api";
import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStock: 0,
    reorderRequired: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      const products = await apiRequest("/products");
      const reorders = await apiRequest("/reorder/recommendations");

      setStats({
        totalProducts: products.length,
        lowStock: products.filter(
          (p: any) => p.currentStock <= p.reorderPoint
        ).length,
        reorderRequired: reorders.filter(
          (r: any) => r.status === "REORDER_REQUIRED"
        ).length,
      });
    }

    fetchStats();
  }, []);

  return (
    <Protected>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Total SKUs"
            value={stats.totalProducts}
          />
          <StatCard
            title="Low Stock Items"
            value={stats.lowStock}
          />
          <StatCard
            title="Reorder Needed"
            value={stats.reorderRequired}
          />
        </div>
      </div>
    </Protected>
  );
}
