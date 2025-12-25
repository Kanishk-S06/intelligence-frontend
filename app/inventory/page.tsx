"use client";

import { useEffect, useState } from "react";
import Protected from "@/components/Protected";
import InventoryTable from "@/components/InventoryTable";
import AddProductDialog from "@/components/AddProductDialog";
import CsvImportDialog from "@/components/CsvImportDialog";
import { apiRequest } from "@/lib/api";

export type Product = {
  id: string;
  sku: string;
  name: string;
  category: string;
  currentStock: number;
  reorderPoint: number;
  leadTimeDays: number;
};

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await apiRequest("/products");
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Protected>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-semibold">Inventory</h1>

          <div className="flex gap-2">
            <AddProductDialog onAdded={fetchProducts} />
            <CsvImportDialog onSuccess={fetchProducts} />
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-muted-foreground">Loading inventory...</p>
        ) : products.length === 0 ? (
          <div className="border rounded-md p-6 text-center text-muted-foreground">
            No products found. Add a product or import via CSV.
          </div>
        ) : (
          <InventoryTable products={products} />
        )}
      </div>
    </Protected>
  );
}
