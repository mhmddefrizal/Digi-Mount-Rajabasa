import PaymentStats from "@/components/payments/payment-stats";
import PaymentTable from "@/components/payments/payment-table";

// function halaman pembayaran
export default function PaymentsPage() {
    return (
        // layout utama halaman pembayaran dengan spasi antar elemen
        <main className="space-y-8">
            <header className="flex items-start justify-between">

            </header>
            <PaymentStats />
            <PaymentTable />
        </main>
    )
}