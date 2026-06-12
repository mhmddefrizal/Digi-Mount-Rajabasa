import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// komponen kartu ringkasan pembayaran
export default function PaymentSummaryCard() {
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
                <span>Rp 925.000</span> {/* subtotal pembayaran (dummy) */}
            </div>
            <div className="flex justify-between">
                <span>Fines</span>
                <span>Rp 50.000</span> {/* denda pembayaran (dummy) */}
            </div>
            <div className="rounded-lg bg-primary p-5 text-white">
                <p className="text-xs uppercase">
                    Total Payment
                </p>
                <p className="font-semibold text-2xl">
                    Rp 975.000 {/* total pembayaran (dummy) */}
                </p>
            </div>
        </CardContent>
    </Card>
  )
}