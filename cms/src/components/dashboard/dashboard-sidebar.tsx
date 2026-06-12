"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CreditCard, LayoutDashboard, Map, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";

// add sidebar for dashboard
export default function DashboardSidebar() {
  const pathname = usePathname();
  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Registration",
      href: "/registrations",
      icon: ClipboardList,
    },
  ];

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
      <nav className="flex-1 px-3 py-6 space-y-2">
        {/* bagian menu navigasi */}
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "w-full flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition",
                isActive
                  ? "bg-primary-dim text-primary"
                  : "text-text-secondary hover:bg-primary-dim/60 hover:text-primary"
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}

        {/* payment */}
        <Link
          href="/payments"
          className={cn(
            "w-full flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition",
            pathname.startsWith("/payments")
              ? "bg-primary-dim text-primary"
              : "text-text-secondary hover:bg-primary-dim/60 hover:text-primary"
          )}
        >
          <CreditCard className="w-5 h-5" />
          Payment
        </Link>
        {/* Trail Management */}
        <Link
          href="/trails"
          className={cn(
            "w-full flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition",
            pathname.startsWith("/trails")
              ? "bg-primary-dim text-primary"
              : "text-text-secondary hover:bg-primary-dim/60 hover:text-primary"
          )}
        >
          <Map className="w-5 h-5" />
          Trail Management
        </Link>
      </nav>
    </aside>
  );
}
