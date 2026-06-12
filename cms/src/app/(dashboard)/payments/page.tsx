"use client";

import PaymentStats from "@/components/payments/payment-stats";
import PaymentTable from "@/components/payments/payment-table";
import { Button } from "@/components/ui/button";
import { payments } from "@/lib/mock-data";

// function halaman pembayaran
export default function PaymentsPage() {
    const handleExportCsv = () => {
        const rows = [
            ["Transaction ID", "Group", "Leader", "Route", "Total", "Status"],
            ...payments.map((payment) => [
                payment.id,
                payment.groupName,
                payment.leader,
                payment.route,
                payment.total.toString(),
                payment.status,
            ]),
        ];

        const csv = rows
            .map((row) =>
                row
                    .map((cell) => `"${cell.replaceAll('"', '""')}"`)
                    .join(",")
            )
            .join("\n");

        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "payments.csv";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    };

    return (
        // layout utama halaman pembayaran dengan spasi antar elemen
        <main className="space-y-8">
            <header className="flex items-start justify-between">
                {/* Header content section */}
                <section>
                    <h1 className="font-display text-6xl leading-none">
                        Payment Monitoring
                    </h1>
                    <p className="mt-3 text-text-secondary">
                        Review and monitor expedition payment transactions.
                    </p>
                </section>
                <Button variant="outline" onClick={handleExportCsv}>
                    Export CSV
                </Button>
            </header>
            <PaymentStats />
            <PaymentTable />
        </main>
    )
}
