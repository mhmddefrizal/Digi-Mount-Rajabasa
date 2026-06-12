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
    </Card>
  )
}