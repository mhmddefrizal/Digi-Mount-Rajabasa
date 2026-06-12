import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PaymentDetail } from "@/lib/mock-data";

// komponen SelectedRouteCard untuk menampilkan informasi jalur yang dipilih
interface Props {
  payment: PaymentDetail;
}

export default function SelectedRouteCard({ payment }: Props) {
    return (
       <Card>
          <CardHeader>
             <CardTitle>Selected Route</CardTitle>
          </CardHeader>

          {/* informasi jalur yang dipilih (dummy) */}
          <CardContent>
             <p className="text-xs text-text-muted">ROUTE NAME</p>

             <h3 className="text-xl font-semibold mt-1">
                {payment.route}
             </h3>

            <div className="grid grid-cols-3 gap-4 mt-6">
               <div>
                  <p className="text-xs text-text-muted">DIFFICULTY</p>
                     <p className="text-primary font-medium">
                      {payment.difficulty}
                     </p>
                  </div>
               <div>
                  <p className="text-xs text-text-muted">DISTANCE</p>
                     <p className="text-primary font-medium">
                      {payment.distance}
                     </p>
                  </div>
               <div>
                  <p className="text-xs text-text-muted">ELEVATION</p>
                     <p className="text-primary font-medium">
                      {payment.elevation}
                     </p>
                  </div>
            </div>
         </CardContent>
      </Card>
   );
}
