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

type ReorderItem = {
  productId: string;
  sku: string;
  name: string;
  avgDailySales?: number;
  currentStock?: number;
  leadTimeDays?: number;
  recommendedReorderQty: number;
  status: string;
  reason?: string;
};

function statusBadge(status: string) {
  if (status === "REORDER_REQUIRED") {
    return <Badge variant="destructive">Action Needed</Badge>;
  }
  if (status === "NO_SALES_DATA") {
    return <Badge variant="secondary">No Sales Data</Badge>;
  }
  return <Badge variant="outline">OK</Badge>;
}

export default function ReorderTable({ data }: { data: ReorderItem[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>SKU</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Avg Daily Sales</TableHead>
          <TableHead>Current Stock</TableHead>
          <TableHead>Lead Time</TableHead>
          <TableHead>Recommended Qty</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Why?</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item) => (
          <TableRow key={item.productId}>
            <TableCell>{item.sku}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.avgDailySales ?? "-"}</TableCell>
            <TableCell>{item.currentStock ?? "-"}</TableCell>
            <TableCell>
              {item.leadTimeDays ? `${item.leadTimeDays} days` : "-"}
            </TableCell>
            <TableCell className="font-semibold">
              {item.recommendedReorderQty}
            </TableCell>
            <TableCell>{statusBadge(item.status)}</TableCell>
            <TableCell className="text-sm text-muted-foreground max-w-xs">
              {item.reason ?? "-"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
