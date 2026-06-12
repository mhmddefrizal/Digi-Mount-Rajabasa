import { notFound } from "next/navigation";
import CustomerInformationCard from "@/components/payments/customer-information-card";
import FeeBreakdownCard from "@/components/payments/fee-breakdown-card";
import PaymentDetailHeader from "@/components/payments/payment-detail-header";
import PaymentSummaryCard from "@/components/payments/payment-summary-card";
import SelectedRouteCard from "@/components/payments/selected-route-card";
import { getPaymentDetail } from "@/lib/mock-data";

// halaman detail pembayaran
export default function PaymentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const payment = getPaymentDetail(params.id);

  if (!payment) {
    notFound();
  }

  return (
    // layout utama halaman detail pembayaran
    <main className="space-y-6">
        <PaymentDetailHeader payment={payment} />
        {/* bagian utama halaman detail pembayaran */}
        <section className="grid grid-cols-12 gap-6">
            <article className="col-span-8">
                <CustomerInformationCard payment={payment} />
            </article>
            <aside className="col-span-4">
                <PaymentSummaryCard payment={payment} />
            </aside>
            <article className="col-span-8">
                <FeeBreakdownCard payment={payment} />
            </article>
            <aside className="col-span-4">
                <SelectedRouteCard payment={payment} />
            </aside>
        </section>
    </main>
  )
}
