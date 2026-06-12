import { Badge } from "../ui/badge";

// definisikan tipe data untuk props komponen PaymentStatusBadge
interface Props {
  status: string;
}

export default function PaymentStatusBadge({
    status,
}: Props) {
    const normalizedStatus = status.toLowerCase();

    // menentukan warna badge berdasarkan status pembayaran
    if (normalizedStatus === "paid") {
        return (
            <Badge className="bg-green-100 text-green-800">
                Paid
            </Badge>
        );
    } else if (normalizedStatus === "pending") {
        return (
            <Badge className="bg-yellow-100 text-yellow-800">
                Pending
            </Badge>
        );
    } else if (normalizedStatus === "overdue") {
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
