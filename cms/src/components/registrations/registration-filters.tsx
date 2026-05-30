import { Button } from "@/components/ui/button";

// tambah filter untuk registration, seperti filter berdasarkan tanggal, status, dll.
export default function RegistrationFilters() {
   return (
      // section untuk bagian filter
      <section className="flex flex-wrap items-center justify-between gap-4">
         <div className="flex gap-3">
            {/* tombol untuk melihat semua trail */}
            <Button variant="outline" className="min-w-45">
               All Trails
            </Button>
            {/* tombol untuk melihat semua status */}
            <Button variant="outline" className="min-w-45">
               All Status
            </Button>
         </div>
         {/* tombol untuk menambah registration */}
         <Button className=" bg-primary hover:bg-primary-light text-white ">
            + New Registration
         </Button>
      </section>
   );
}
