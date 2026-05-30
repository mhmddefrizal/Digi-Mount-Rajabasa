import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// tambah filter untuk registration, seperti filter berdasarkan tanggal, status, dll.
export default function RegistrationFilters() {
   return (
      // section untuk bagian filter
      <section className="flex flex-wrap items-center justify-between gap-4">
         <div className="flex flex-wrap gap-3">
            {/* tombol untuk melihat semua trail */}
            <Button
               variant="outline"
               className="min-w-44 h-10 justify-between px-4 text-sm text-text-secondary"
            >
               All Trails
               <ChevronDown className="w-4 h-4" />
            </Button>
            {/* tombol untuk melihat semua status */}
            <Button
               variant="outline"
               className="min-w-44 h-10 justify-between px-4 text-sm text-text-secondary"
            >
               All Status
               <ChevronDown className="w-4 h-4" />
            </Button>
         </div>
         {/* tombol untuk menambah registration */}
         <Button className="h-10 bg-primary hover:bg-primary-light text-white shadow-[var(--shadow-button)]">
            + New Registration
         </Button>
      </section>
   );
}
