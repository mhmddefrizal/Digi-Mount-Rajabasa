import { Card, CardContent } from "../ui/card";

// buat komponen untuk menampilkan grafik traffic, yang akan digunakan di halaman dashboard
export default function TrafficChart() {
  return (
    // bagian card untuk menampilkan grafik traffic, dengan header yang berisi judul dan tombol untuk melihat detail
    <Card className="border-border rounded-xl shadow-none">
        <CardContent className="p-7">
            <header className="flex items-center justify-between mb-8">

            </header>
        </CardContent>
    </Card>
  )
}