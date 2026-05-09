import DashboardHeader from "../dashboard/dashboard-header";
import DashboardSidebar from "../dashboard/dashboard-sidebar";

// TODO: add a loading state for the dashboard layout

// dashboard layout
interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <main className="flex min-h-screen bg-background">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <section className="flex flex-1 flex-col">
            
        </section>
    </main>
  )
}