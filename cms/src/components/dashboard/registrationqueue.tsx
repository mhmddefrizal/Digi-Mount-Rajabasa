import { Card, CardContent } from "../ui/card";


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