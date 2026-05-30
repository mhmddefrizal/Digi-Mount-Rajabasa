// komponen untuk menampilkan tabel pendaftaran

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// data dummy untuk pendaftaran
const registrations = [
   {
      id: "REG-1024",
      name: "Aditya Jaya",
      route: "Jalur Utama",
      status: "Pending",
      createdAt: "10 menit lalu",
   },
   {
      id: "REG-1025",
      name: "Siti Fatimah",
      route: "Jalur Pematang",
      status: "Verified",
      createdAt: "20 menit lalu",
   },
   {
      id: "REG-1026",
      name: "Bambang Kusuma",
      route: "Jalur Canggung",
      status: "Completed",
      createdAt: "45 menit lalu",
   },
];

// fungsi untuk menampilkan tabel pendaftaran
export default function RegistrationTable() {
   return (
      // <div>
      //     {/* tabel pendaftaran */}
      //     {/* masih menggunakan data dummy */}
      // </div>
      <section>
         <Card>
            {/* header untuk tabel pendaftaran */}
            <CardHeader>
               <CardTitle>Active Applications</CardTitle>
            </CardHeader>

            {/* content untuk tabel pendaftaran */}
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>

                        </thead>
                    </table>
                </div>
            </CardContent>
         </Card>
      </section>
   );
}
