"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { apiRequest } from "@/lib/api";

export default function AddProductDialog({ onAdded }: { onAdded: () => void }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    sku: "",
    name: "",
    category: "",
    currentStock: "",
    reorderPoint: "",
    leadTimeDays: "",
  });

  const handleSubmit = async () => {
    await apiRequest("/products", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        currentStock: Number(form.currentStock),
        reorderPoint: Number(form.reorderPoint),
        leadTimeDays: Number(form.leadTimeDays),
      }),
    });

    setOpen(false);
    onAdded();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          {Object.keys(form).map((key) => (
            <Input
              key={key}
              placeholder={key}
              value={(form as any)[key]}
              onChange={(e) =>
                setForm({ ...form, [key]: e.target.value })
              }
            />
          ))}

          <Button className="w-full" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
