import { Button } from "../ui/button";
import { Card, CardContent, CardContent, CardHeader, CardTitle } from "../ui/card";

// komponen PaymentTable untuk menampilkan tabel pembayaran
export default function PaymentTable() {
    return (
        <section>
            <Card>
                {/* Header for the payment table */}
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>
                        Expedition Groups
                    </CardTitle>
                    <Button variant="outline">
                        Filter Status
                    </Button>
                </CardHeader>
                <CardContent>
                    {/* Table structure for displaying payment information */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border text-left">
                                    <th className="py-4">Group Name</th>
                                    <th>Leader</th>
                                    <th>Route</th>
                                    <th>Registration Fee</th>
                                    <th>Fine</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}