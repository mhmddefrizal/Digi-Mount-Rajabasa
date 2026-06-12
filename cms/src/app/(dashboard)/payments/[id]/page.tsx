import CustomerInformationCard from "@/components/payments/customer-information-card";
import FeeBreakdownCard from "@/components/payments/fee-breakdown-card";
import PaymentDetailHeader from "@/components/payments/payment-detail-header";
import PaymentSummaryCard from "@/components/payments/payment-summary-card";
import SelectedRouteCard from "@/components/payments/selected-route-card";

// halaman detail pembayaran
export default function PaymentDetailPage() {
  return (
    // layout utama halaman detail pembayaran
    <main className="space-y-6">
        <PaymentDetailHeader />
        {/* bagian utama halaman detail pembayaran */}
        <section className="grid grid-cols-12 gap-6">
            <article className="col-span-8">
                <CustomerInformationCard />
            </article>
            <aside className="col-span-4">
                <PaymentSummaryCard />
            </aside>
            <article className="col-span-8">
                <FeeBreakdownCard />
            </article>
            <aside className="col-span-4">
                <SelectedRouteCard />
            </aside>
        </section>
    </main>
  )
}
