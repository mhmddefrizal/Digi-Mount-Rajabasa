"use client";

// import packages gambar 
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// import components kartu
import { Card, CardContent } from "../ui/card";

// import komponen badge, switch, dan ikon
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
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
    const [isOpen, setIsOpen] = useState(trail.status);
    const [isDeleted, setIsDeleted] = useState(false);

    if (isDeleted) {
      return null;
    }

    const handleDelete = () => {
      const confirmed = window.confirm(`Delete ${trail.name}?`);

      if (confirmed) {
        setIsDeleted(true);
      }
    };

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
                {/* Konten kartu trail */}
                <CardContent className="space-y-5 p-5">
                    <header>
                        {/* Judul dan jarak trail */}
                        <div className="flex justify-between">
                            <h3 className="font-display text-3xl">
                                {trail.name}
                            </h3>
                            <span className="text-primary font-semibold">
                                {trail.distance}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-sm text-text-secondary">
                            {/* Lokasi trail dengan ikon */}
                            <MapPin size={16} />
                            <span>{trail.location}</span>
                        </div>
                    </header>
                    {/* Footer kartu trail */}
                    <footer className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-text-secondary">
                                Status:
                            </span>
                            {/* Switch untuk mengubah status trail */}
                            <Switch checked={isOpen} onCheckedChange={(value) => setIsOpen(value === true)} />
                            <span className={isOpen ? "text-primary text-sm font-medium" : "text-text-muted text-sm"}>
                                {isOpen ? "Open" : "Closed"}
                            </span>
                        </div>
                        <div className="flex gap-3">
                            {/* Tombol edit dan hapus dengan ikon */}
                            <Button asChild variant="ghost" size="icon-sm" className="text-primary hover:text-primary/80">
                                <Link href={`/trails/new?trail=${trail.id}`} aria-label={`Edit ${trail.name}`}>
                                    <Pencil size={16} />
                                </Link>
                            </Button>
                            <Button type="button" variant="ghost" size="icon-sm" className="text-destructive hover:text-destructive/80" onClick={handleDelete} aria-label={`Delete ${trail.name}`}>
                                <Trash2 size={16} />
                            </Button>
                        </div>
                    </footer>
                </CardContent>
            </Card>
        </article>
    )
}
