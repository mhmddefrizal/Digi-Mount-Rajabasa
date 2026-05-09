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
            {/* buat bagian untuk menampilkan daftar pendaftar yang sedang mengantri */}
            <section className="space-y-6">
                {queue.map((item, index) => (
                    <article key={index} className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <div>
                            <h3 className="font-semibold">
                                {item.name}
                            </h3>
                            <p className="text-sm text-text-secondary">
                                {item.trail}
                            </p>
                            <p className="text-xs text-text-muted mt-1">
                                {item.time}
                            </p>
                        </div>
                    </article>
                ))}
            </section>
        </CardContent>
    </Card>
  )
}