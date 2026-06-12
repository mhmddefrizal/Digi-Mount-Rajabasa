import { Badge } from "../ui/badge";

export default function PaymentStatusBadge({
    status,
}: Props) {
    // menentukan warna badge berdasarkan status pembayaran
    if (status === "paid") {
        return (
            <Badge className="bg-green-100 text-green-800">
                Paid
            </Badge>
        );
    } else if (status === "pending") {
        return (
            <Badge className="bg-yellow-100 text-yellow-800">
                Pending
            </Badge>
        );
    } else if (status === "overdue") {
        return (
            <Badge className="bg-red-100 text-red-800">
                Overdue
            </Badge>
        );
    } else {
        return (
            <Badge className="bg-gray-100 text-gray-800">
                Unknown
            </Badge>
        );
    }
}