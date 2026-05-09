// layout dashboard
import DashboardLayout from "@/components/layout/dashboard-layout";

// buat layout untuk dashboard, yang akan digunakan untuk semua halaman di dalam dashboard
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}