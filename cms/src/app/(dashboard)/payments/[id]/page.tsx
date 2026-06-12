import CustomerInformationCard from "@/components/payments/customer-information-card";
import PaymentDetailHeader from "@/components/payments/payment-detail-header";

// halaman detail pembayaran
export default function PaymentDetailPage() {
  return (
    // layout utama halaman detail pembayaran
    <main className="space-y-6">
        <PaymentDetailHeader />
        <section className="grid grid-cols-12 gap-6">
            <article className="col-span-8">
                <CustomerInformationCard />
            </article>
        </section>
    </main>
  )
}
