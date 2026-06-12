import { Card, CardHeader, CardTitle } from "../ui/card";

// komponen PaymentTable untuk menampilkan tabel pembayaran
export default function PaymentTable() {
    return (
        <section>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>
                        Expedition Groups
                    </CardTitle>
                </CardHeader>
            </Card>
        </section>
    )
}