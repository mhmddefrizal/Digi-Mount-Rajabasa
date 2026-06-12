import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PaymentDetail } from "@/lib/mock-data";

// komponen kartu ringkasan pembayaran
interface Props {
  payment: PaymentDetail;
}

export default function PaymentSummaryCard({ payment }: Props) {
  return (
    <Card>
        {/* header untuk kartu ringkasan pembayaran */}
        <CardHeader>
            <CardTitle>
                Payment Summary
            </CardTitle>
        </CardHeader>

        {/* isi kartu ringkasan pembayaran (masih data dummy) */}
        <CardContent className="space-y-4">
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rp {payment.registrationFee.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between">
                <span>Fines</span>
                <span>Rp {payment.fine.toLocaleString("id-ID")}</span>
            </div>
            <div className="rounded-lg bg-primary p-5 text-white">
                <p className="text-xs uppercase">
                    Total Payment
                </p>
                <p className="font-semibold text-2xl">
                    Rp {payment.total.toLocaleString("id-ID")}
                </p>
            </div>
        </CardContent>
    </Card>
  )
}
