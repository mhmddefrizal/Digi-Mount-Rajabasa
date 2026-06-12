import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// komponen kartu informasi pelanggan
export default function CustomerInformationCard() {
  return (
    // gunakan elemen article untuk membungkus kartu informasi pelanggan
    <Card>
        <CardHeader>
            <CardTitle>
                Customer Information
            </CardTitle>
        </CardHeader>
        {/* card informasi pelanggan pendaftar */}
        <CardContent>
            <dl className="grid grid-cols-2 gap-6">
                <div>
                    <dt className="text-xs text-text-muted">
                        LEADER NAME
                    </dt>
                    <dd className="font-semibold">
                        {/* nama ketua (dummy) */}
                        Bambang Wijaya
                    </dd>
                </div>
                {/* informasi nomor telepon */}
                <div>
                    <dt className="text-xs text-text-muted">
                        PHONE NUMBER
                    </dt>
                    <dd className="font-semibold">
                        {/* nomor telepon (dummy) */}
                        +62 812-3456-7890
                    </dd>
                </div>
                <div>
                    <dt className="text-xs text-text-muted">
                        NIK
                    </dt>
                    <dd className="font-semibold">
                        {/* NIK (dummy) */}
                        1234567890123456
                    </dd>
                </div>
                <div>
                    <dt className="text-xs text-text-muted">
                        EMAIL
                    </dt>
                    <dd className="font-semibold">
                        {/* email (dummy) */}
                        bambang.wijaya@example.com
                    </dd>
                </div>
                <div>
                    <dt className="text-xs text-text-muted">
                        PAYMENT METHOD
                    </dt>
                    <dd className="font-semibold">
                        {/* metode pembayaran (dummy) */}
                        Bank Transfer
                    </dd>
                </div>
            </dl>
        </CardContent>
    </Card>
  )
}