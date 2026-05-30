import StatsCard from "@/components/dashboard/stats-card";

// fungsi untuk menampilkan statistik pendaftaran
export default function RegistrationStats() {
   return (
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
         {/* card untuk menampilkan data pendaftaran */}
         {/* masih menggunakan data dummy */}
         {/* card untuk menampilkan semua pending */}
         <StatsCard
            title="TOTAL PENDING"
            value="124"
            description="+12%"
            color="text-primary"
         />
         {/* card untuk menampilkan data verifikasi */}
         <StatsCard
            title="VERIFIED TODAY"
            value="42"
            description="Stable"
            color="text-green-600"
         />
         {/* card untuk menampilkan data trail aktif */}
         <StatsCard
            title="ON-TRAIL ACTIVE"
            value="856"
            description="-3%"
            color="text-red-500"
         />
         {/* card untuk menampilkan data bulanan selesai */}
         <StatsCard
            title="MONTHLY COMPLETION"
            value="2.4k"
            description="+8%"
            color="text-primary"
         />
      </section>
   );
}
