"use client";

import StatsCard from "../dashboard/stats-card";

// komponen PaymentStats untuk menampilkan statistik pembayaran
export default function PaymentStats() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* tampilan statistik akumulasi */}
            <StatsCard
                title="TOTAL RECEIVABLE"
                value="Rp 1.240.000"
                description="+12% from last month"
                color="text-green-600"
            />
            <StatsCard
                title="OUTSTANDING FEES"
                value="Rp 345.000"
                description="14 groups pending"
                color="text-primary"
            />
            <StatsCard
                title="TOTAL FINES"
                value="Rp 12.500"
                description="Environmental violations"
                color="text-red-500"
            />
        </section>
    )
}
