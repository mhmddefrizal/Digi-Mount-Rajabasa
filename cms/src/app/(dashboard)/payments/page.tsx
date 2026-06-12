import PaymentStats from "@/components/payments/payment-stats";
import PaymentTable from "@/components/payments/payment-table";

// function halaman pembayaran
export default function PaymentsPage() {
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
            </header>
            <PaymentStats />
            <PaymentTable />
        </main>
    )
}