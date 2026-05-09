import { Card, CardContent } from "../ui/card";

// buat komponen untuk menampilkan grafik traffic, yang akan digunakan di halaman dashboard
export default function TrafficChart() {
   return (
      // bagian card untuk menampilkan grafik traffic, dengan header yang berisi judul dan tombol untuk melihat detail
      <Card className="border-border rounded-xl shadow-none">
         <CardContent className="p-7">
            <header className="flex items-center justify-between mb-8">
               {/* bagian judul */}
               <h2 className="text-4xl font-semibold font-display">
                  Climber Traffic
               </h2>
               <div className="flex items-center gap-2 text-sm text-text-muted">
                  <div className="w-3 h-3 rounded-sm bg-primary" />
                  Weekly Check-in
               </div>
            </header>

            {/* Dummy Chart (sementara) */}
            <section className="h-80 flex items-end gap-6">
               {[40, 62, 31, 82, 51, 25, 20].map((item, index) => (
                  <div
                     key={index}
                     className="flex-1 bg-panel rounded-t-md relative"
                     style={{
                        height: `${item * 3}px`,
                        background:
                           index === 3 ? "var(--summit-orange)" : "#ECECEC",
                     }}
                  />
               ))}
            </section>
         </CardContent>
      </Card>
   );
}
