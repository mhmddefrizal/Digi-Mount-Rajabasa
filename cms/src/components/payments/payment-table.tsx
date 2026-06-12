import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import PaymentStatusBadge from "./payment-status-badge";

// data pembayaran statis untuk sementara
const payments = [
  {
    id: "REG-1024",
    groupName: "Rajabasa Adventure",
    leader: "Ahmad Fauzi",
    route: "Jalur Utama",
    registrationFee: 250000,
    fine: 0,
    total: 250000,
    status: "Pending",
  },
  {
    id: "REG-1025",
    groupName: "Lampung Hiking Club",
    leader: "Siti Rahma",
    route: "Jalur Pematang",
    registrationFee: 250000,
    fine: 50000,
    total: 300000,
    status: "Pending",
  },
  {
    id: "REG-1026",
    groupName: "Summit Team",
    leader: "Bambang Kusuma",
    route: "Jalur Canggung",
    registrationFee: 250000,
    fine: 0,
    total: 250000,
    status: "Paid",
  },
  {
    id: "REG-1027",
    groupName: "Mountain Explorers",
    leader: "Dewi Sartika",
    route: "Jalur Bukit",
    registrationFee: 250000,
    fine: 0,
    total: 250000,
    status: "Overdue",
  }
];

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
                            {/* Table body for displaying payment data */}
                            <tbody>
                                {payments.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b border-border hover:bg-muted/50 transition-colors"
                                    >
                                        <td className="py-5 font-medium">
                                            {item.groupName}
                                        </td>
                                        <td>{item.leader}</td>
                                        <td>{item.route}</td>
                                        <td>Rp{" "} {item.registrationFee.toLocaleString("id-ID")}</td>
                                        <td>Rp{" "} {item.fine.toLocaleString("id-ID")}</td>
                                        <td>Rp{" "} {item.total.toLocaleString("id-ID")}</td>
                                        <td><PaymentStatusBadge status={item.status} /></td>

                                        <td className="text-right">
                                            <Button variant="outline" size="sm">
                                                View Details
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}