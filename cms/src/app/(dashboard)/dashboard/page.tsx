// page halaman dashboard
export default function DashboardPage() {
   return (
      // tampilan dashboard overview yang menampilkan beberapa informasi penting seperti jumlah ekspedisi, jumlah barang, dll
      <main className="space-y-8">
        {/* bungkus dengan header */}
         <header>
            <h1 className="font-display text-6xl leading-none">
               Expedition Overview
            </h1>
            <p className="mt-3 text-text-secondary">
               Real-time logistics and climber activity monitoring.
            </p>
         </header>
      </main>
   );
}
