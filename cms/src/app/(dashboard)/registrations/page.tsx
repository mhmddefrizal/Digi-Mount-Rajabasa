"use client";

import { useMemo, useState } from "react";

import RegistrationFilters from "@/components/registrations/registration-filters";
import RegistrationStats from "@/components/registrations/registration-stats";
import RegistrationTable from "@/components/registrations/registration-table";
import { registrations } from "@/lib/mock-data";

type TrailFilter = "all" | "Jalur Utama" | "Jalur Pematang" | "Jalur Canggung";
type StatusFilter = "all" | "Pending" | "Verified" | "Completed";

// halaman untuk menampilkan daftar pendaftaran
export default function RegistrationPage() {
    const [trailFilter, setTrailFilter] = useState<TrailFilter>("all");
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

    const filteredRegistrations = useMemo(() => {
        return registrations.filter((registration) => {
            const matchesTrail = trailFilter === "all" || registration.route === trailFilter;
            const matchesStatus = statusFilter === "all" || registration.status === statusFilter;

            return matchesTrail && matchesStatus;
        });
    }, [trailFilter, statusFilter]);

    return (
        // bagian utama untuk menampilkan daftar pendaftaran
        <main className="space-y-6">
            {/* bagian untuk menampilkan header */}
            <header>
                <h1 className="font-display text-4xl leading-tight">
                    Registration List
                </h1>

                {/* paragraf untuk menjelaskan tujuan halaman */}
                <p className="mt-2 text-text-secondary">
                    Manage and monitor climber registrations for active trails.
                </p>
            </header>

            {/* bagian untuk menampilkan filter pendaftaran */}
            <RegistrationFilters
              trailFilter={trailFilter}
              statusFilter={statusFilter}
              onTrailFilterChange={setTrailFilter}
              onStatusFilterChange={setStatusFilter}
            />

            {/* bagian untuk menampilkan statistik pendaftaran */}
            <RegistrationStats />

            {/* bagian untuk menampilkan tabel pendaftaran */}
            <RegistrationTable registrations={filteredRegistrations} />
            
        </main>
    );
}
