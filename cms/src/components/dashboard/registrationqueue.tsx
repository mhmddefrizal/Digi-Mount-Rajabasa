import { Card, CardContent } from "../ui/card";

// data dummy untuk antrian pendaftaran, yang akan digunakan untuk menampilkan daftar pendaftar yang sedang mengantri
const queue = [
  {
    name: "Ahmad Fauzi",
    trail: "Jalur Pendakian Utama",
    time: "10 mins ago",
  },
  {
    name: "Siti Rahma",
    trail: "Jalur Selatan",
    time: "25 mins ago",
  },
  {
    name: "Dimas Pratama",
    trail: "Jalur Timur",
    time: "40 mins ago",
  },
  {
    name: "Raka Saputra",
    trail: "Jalur Summit",
    time: "1 hour ago",
  },
];

// buat komponen untuk menampilkan antrian pendaftaran, yang akan digunakan di halaman dashboard
export default function RegistrationQueue() {
  return (
    <Card className="border-border rounded-xl shadow-none h-full">
        <CardContent className="p-7">
            <header className="mb-6">
                <h2 className="text-4xl font-semibold font-display">
                    Registration Queue
                </h2>
            </header>
        </CardContent>
    </Card>
  )
}