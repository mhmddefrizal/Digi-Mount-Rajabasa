import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// komponen SelectedRouteCard untuk menampilkan informasi jalur yang dipilih
<Card>
   <CardHeader>
      <CardTitle>Selected Route</CardTitle>
   </CardHeader>

   {/* informasi jalur yang dipilih (dummy) */}
   <CardContent>
      <p className="text-xs text-text-muted">ROUTE NAME</p>

      <h3 className="text-xl font-semibold mt-1">
         {/* nama jalur yang dipilih (dummy) */}
         Jalur Pendakian Gunung Rajabasa
      </h3>

      <div className="grid grid-cols-3 gap-4 mt-6">
         <div>
            <p className="text-xs text-text-muted">DIFFICULTY</p>
            <p className="text-primary font-medium">
               {/* tingkat kesulitan jalur (dummy) */}
               Medium
            </p>
         </div>
         <div>
            <p className="text-xs text-text-muted">DISTANCE</p>
            <p className="text-primary font-medium">
               {/* jarak jalur (dummy) */}
               6.5 km
            </p>
         </div>
         <div>
            <p className="text-xs text-text-muted">ELEVATION</p>
            <p className="text-primary font-medium">
               {/* elevasi jalur (dummy) */}
               1,200 m
            </p>
         </div>
      </div>
   </CardContent>
</Card>;
