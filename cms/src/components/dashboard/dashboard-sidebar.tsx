import { CreditCard, LayoutDashboard, Map, ClipboardList } from "lucide-react";

// add sidebar for dashboard
export default function DashboardSidebar() {
  return (
    <aside className="w-65 border-r border-border bg-panel flex flex-col">
      {/* bagian logo (masih simbol) */}
      <header className="border-b border-border px-6 py-7">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
            ▲
          </div>
          <div>
            {/* bagian judul */}
            <h1 className="font-display text-[28px] leading-none">DigiMount</h1>
            {/* bagian deskripsi singkat */}
            <p className="text-[11px] tracking-[3px] text-text-muted mt-1">
              EXPEDITION CONTROL
            </p>
          </div>
        </div>
      </header>
    </aside>
  );
}
