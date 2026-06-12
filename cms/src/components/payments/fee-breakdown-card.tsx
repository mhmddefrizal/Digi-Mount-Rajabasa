import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PaymentDetail } from "@/lib/mock-data";

// komponen FeeBreakdownCard untuk menampilkan rincian biaya lainnya pembayaran
interface Props {
  payment: PaymentDetail;
}

export default function FeeBreakdownCard({ payment }: Props) {
    return (
       <Card>
          <CardHeader>
             <CardTitle>Fee Breakdown</CardTitle>
         </CardHeader>
         {/* card rincian biaya pembayaran */}

          {/* isi kartu rincian biaya (masih data dummy) */}
          <CardContent>
             <div className="space-y-5">
                {payment.breakdown.map((item) => (
                   <div key={item.label} className="flex justify-between">
                      <span>{item.label}</span>
                      <span>Rp {item.amount.toLocaleString("id-ID")}</span>
                   </div>
                ))}
             </div>
          </CardContent>
       </Card>
   );
}
