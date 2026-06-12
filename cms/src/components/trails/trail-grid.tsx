import TrailCard from "./trail-card";
import { trails } from "@/lib/mock-data";

// komponen TrailGrid untuk menampilkan grid kartu trail
export default function TrailGrid() {
   return (
      <section
         className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
      >
         {trails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
         ))}
      </section>
   );
}
