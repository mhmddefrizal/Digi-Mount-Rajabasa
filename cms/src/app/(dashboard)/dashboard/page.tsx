import RegistrationQueue from "@/components/dashboard/registrationqueue";
import StatsCard from "@/components/dashboard/stats-card";
import TrafficChart from "@/components/dashboard/trafficchart";

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

         {/* stats */}
         <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* stats card untuk menampilkan jumlah daftar */}
            <StatsCard
               title="TOTAL REGISTRATIONS"
               value="42"
               description="+12% from yesterday"
               color="text-green-600"
            />
            {/* stats card untuk menampilkan aktifitas pendaki */}
            <StatsCard
               title="ACTIVE CLIMBERS"
               value="156"
               description="94% at Basecamp or above"
               color="text-primary"
            />

            {/* stats card untuk menampilkan jumlah rute */}
            <StatsCard
               title="TOTAL ROUTES"
               value="8"
               description="2 added this month"
               color="text-blue-500"
            />

            {/* stats card untuk menampilkan jumlah pembayaran */}
            <StatsCard
               title="PENDING PAYMENTS"
               value="12"
               description="3 urgent follow-ups"
               color="text-red-500"
            />
         </section>

         {/* Content */}
         <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* article untuk menampilkan grafik traffic */}
            <article className="xl:col-span-2">
               <TrafficChart />
            </article>
            {/* aside untuk menampilkan antrian pendaftaran */}
            <aside>
               <RegistrationQueue />
            </aside>
         </section>
      </main>
   );
}
