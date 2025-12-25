"use client";

import { useEffect, useState } from "react";
import Protected from "@/components/Protected";
import InventoryTable from "@/components/InventoryTable";
import AddProductDialog from "@/components/AddProductDialog";
import { apiRequest } from "@/lib/api";

export default function InventoryPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await apiRequest("/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Protected>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Inventory</h1>
          <AddProductDialog onAdded={fetchProducts} />
        </div>

        <InventoryTable products={products} />
      </div>
    </Protected>
  );
}
