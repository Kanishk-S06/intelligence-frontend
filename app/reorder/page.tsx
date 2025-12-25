"use client";

import { useEffect, useState } from "react";
import Protected from "@/components/Protected";
import { apiRequest } from "@/lib/api";
import ReorderTable from "@/components/ReorderTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReorderPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiRequest("/reorder/recommendations").then(setData);
  }, []);

  const actionRequired = data.filter(
    (item: any) => item.status === "REORDER_REQUIRED"
  ).length;

  return (
    <Protected>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold">
          Reorder Insights
        </h1>

        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {actionRequired} SKU(s) require immediate reorder
            </p>
          </CardContent>
        </Card>

        <ReorderTable data={data} />
      </div>
    </Protected>
  );
}
