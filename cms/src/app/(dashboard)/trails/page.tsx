import TrailGrid from "@/components/trails/trail-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

// halaman untuk menampilkan daftar trail
export default function TrailsPage() {
    return (
        <main className="space-y-8">
            <header className="flex items-center justify-between">
                {/* section header */}
                <section>
                    <h1 className="font-display text-6xl leading-none">
                        Trail Management
                    </h1>
                    <p className="mt-3 text-text-secondary">
                        Manage hiking routes and operational status.
                    </p>
                </section>
                {/* add trail button */}
                <Button asChild className="bg-primary hover:bg-primary-light text-white">
                    <Link href="/trails/new">
                        <Plus size={20} className="mr-2" />
                        Add New Trail
                    </Link>
                </Button>
            </header>
            <TrailGrid />
        </main>
    )
};
