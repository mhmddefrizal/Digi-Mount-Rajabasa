import TrailGrid from "@/components/trails/trail-grid";

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
            </header>
            <TrailGrid />
        </main>
    )
};