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
    </Card>
  )
}