// layout dashboard untuk semua halaman di grup (dashboard)
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
