import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PaymentDetail } from "@/lib/mock-data";

// komponen kartu informasi pelanggan
interface Props {
  payment: PaymentDetail;
}

export default function CustomerInformationCard({ payment }: Props) {
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
                        {payment.leader}
                    </dd>
                </div>
                {/* informasi nomor telepon */}
                <div>
                    <dt className="text-xs text-text-muted">
                        PHONE NUMBER
                    </dt>
                    <dd className="font-semibold">
                        {payment.phone}
                    </dd>
                </div>
                <div>
                    <dt className="text-xs text-text-muted">
                        NIK
                    </dt>
                    <dd className="font-semibold">
                        {payment.nik}
                    </dd>
                </div>
                <div>
                    <dt className="text-xs text-text-muted">
                        EMAIL
                    </dt>
                    <dd className="font-semibold">
                        {payment.email}
                    </dd>
                </div>
                <div>
                    <dt className="text-xs text-text-muted">
                        PAYMENT METHOD
                    </dt>
                    <dd className="font-semibold">
                        {payment.paymentMethod}
                    </dd>
                </div>
            </dl>
        </CardContent>
    </Card>
  )
}
