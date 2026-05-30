import RegistrationFilters from "@/components/registrations/registration-filters";
import RegistrationStats from "@/components/registrations/registration-stats";
import RegistrationTable from "@/components/registrations/registration-table";

// halaman untuk menampilkan daftar pendaftaran
export default function RegistrationPage() {
    return (
        // bagian utama untuk menampilkan daftar pendaftaran
        <main className="space-y-6">
            {/* bagian untuk menampilkan header */}
            <header>
                <h1 className="font-display text-6xl leading-none">
                    Registration List
                </h1>

                {/* paragraf untuk menjelaskan tujuan halaman */}
                <p className="mt-3 text-text-secondary">
                    Manage and monitor climber registrations.
                </p>
            </header>

            {/* bagian untuk menampilkan filter pendaftaran */}
            <RegistrationFilters />

            {/* bagian untuk menampilkan statistik pendaftaran */}
            <RegistrationStats />

            {/* bagian untuk menampilkan tabel pendaftaran */}
            <RegistrationTable />
            
        </main>
    );
}