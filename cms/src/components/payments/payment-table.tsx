"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import PaymentStatusBadge from "./payment-status-badge";
import { payments } from "@/lib/mock-data";

const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Paid", value: "paid" },
  { label: "Overdue", value: "overdue" },
] as const;

type StatusFilter = (typeof statusOptions)[number]["value"];

export default function PaymentTable() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filteredPayments = useMemo(() => {
    if (statusFilter === "all") {
      return payments;
    }

    return payments.filter((payment) => payment.status === statusFilter);
  }, [statusFilter]);

  return (
    <section>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Expedition Groups</CardTitle>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                Filter Status
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuRadioGroup
                value={statusFilter}
                onValueChange={(value) => setStatusFilter(value as StatusFilter)}
              >
                {statusOptions.map((option) => (
                  <DropdownMenuRadioItem key={option.value} value={option.value}>
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-4">Group Name</th>
                  <th>Leader</th>
                  <th>Route</th>
                  <th>Registration Fee</th>
                  <th>Fine</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-5 font-medium">{item.groupName}</td>
                    <td>{item.leader}</td>
                    <td>{item.route}</td>
                    <td>Rp {item.registrationFee.toLocaleString("id-ID")}</td>
                    <td>Rp {item.fine.toLocaleString("id-ID")}</td>
                    <td>Rp {item.total.toLocaleString("id-ID")}</td>
                    <td>
                      <PaymentStatusBadge status={item.status} />
                    </td>

                    <td className="text-right">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/payments/${item.id}`}>View Details</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
