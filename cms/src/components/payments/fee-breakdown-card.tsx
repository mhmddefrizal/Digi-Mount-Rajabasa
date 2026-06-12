import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// komponen FeeBreakdownCard untuk menampilkan rincian biaya lainnya pembayaran
export default function FeeBreakdownCard() {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Fee Breakdown</CardTitle>
         </CardHeader>
         {/* card rincian biaya pembayaran */}

         {/* isi kartu rincian biaya (masih data dummy) */}
         <CardContent>
            <div className="space-y-5">
               <div className="flex justify-between">
                  <span>Climber Fees</span>
                  <span>Rp 750.000</span> {/* biaya pendaki (dummy) */}
               </div>
               <div className="flex justify-between">
                  <span>Guide Fees</span>
                  <span>Rp 175.000</span> {/* biaya pemandu (dummy) */}
               </div>
               <div className="flex justify-between">
                  <span>Parkir Kendaraan</span>
                  <span>Rp 25.000</span> {/* biaya parkir (dummy) */}
               </div>
               <div className="flex justify-between">
                  <span>SIMAKSI Permit</span>
                  <span>Rp 155.000</span> {/* biaya SIMAKSI (dummy) */}
               </div>
            </div>
         </CardContent>
      </Card>
   );
}
