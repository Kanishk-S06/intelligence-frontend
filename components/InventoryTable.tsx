"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: string;
  sku: string;
  name: string;
  currentStock: number;
  reorderPoint: number;
};

function stockStatus(product: Product) {
  if (product.currentStock <= product.reorderPoint) {
    return <Badge variant="destructive">Low Stock</Badge>;
  }
  return <Badge variant="secondary">OK</Badge>;
}

export default function InventoryTable({
  products,
}: {
  products: Product[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>SKU</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((p) => (
          <TableRow key={p.id}>
            <TableCell>{p.sku}</TableCell>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.currentStock}</TableCell>
            <TableCell>{stockStatus(p)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
