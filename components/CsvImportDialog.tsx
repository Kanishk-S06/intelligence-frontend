"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CsvImportDialog({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/import/products`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );

      onSuccess();
      setFile(null);
      alert("CSV imported successfully");
    } catch {
      alert("Failed to import CSV");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Import CSV</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Inventory via CSV</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <input
            type="file"
            accept=".csv"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
          />

          <Button
            onClick={handleUpload}
            disabled={!file || loading}
            className="w-full"
          >
            {loading ? "Uploading..." : "Upload CSV"}
          </Button>

          <p className="text-sm text-muted-foreground">
            CSV must include: sku, name, category, currentStock,
            reorderPoint, leadTimeDays
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
