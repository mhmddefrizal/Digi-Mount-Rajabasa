// import packages gambar 
import Image from "next/image";

// import components kartu
import { Card, CardContent } from "@components/ui/card";

// import komponen badge, switch, dan ikon
import { Badge } from "@components/ui/badge";
import { Switch } from "@components/ui/switch";
import { MapPin, Pencil, Trash2 } from "lucide-react";

// definisikan tipe data untuk trail (sementara menggunakan tipe data statis, bisa disesuaikan dengan data yang sebenarnya)
interface Trail {
  id: number;
  name: string;
  distance: string;
  location: string;
  difficulty: string;
  status: boolean;
  image: string;
}

interface Props {
  trail: Trail;
}

// komponen TrailCard untuk menampilkan informasi trail
export default function TrailCard({ trail }: Props) {
    return (
        // gunakan elemen article untuk membungkus kartu trail
        <article>
            <Card className="overflow-hidden">
                <div className="relative h-44">
                    {/* Gambar trail */}
                    <Image src={trail.image} alt={trail.name} layout="fill" objectFit="cover" />
                    {/* Badge tingkat kesulitan */}
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        {trail.difficulty}
                    </Badge>
                </div>
            </Card>
        </article>
    )
}