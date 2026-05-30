import StatsCard from "@/components/dashboard/stats-card";

// fungsi untuk menampilkan statistik pendaftaran
export default function RegistrationStats() {
   return (
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
         {/* card untuk menampilkan data pendaftaran */}
         {/* masih menggunakan data dummy */}
         <StatsCard
            title="TOTAL PENDING"
            value="124"
            description="+12%"
            color="text-primary"
         />
         <StatsCard
            title="VERIFIED TODAY"
            value="42"
            description="Stable"
            color="text-green-600"
         />

      </section>
   );
}
