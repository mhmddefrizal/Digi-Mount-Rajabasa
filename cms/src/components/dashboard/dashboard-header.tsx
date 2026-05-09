import { Bell, Search, Settings } from "lucide-react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

// dashboard header
export default function DashboardHeader() {
  return (
    <header className="h-20 border-b border-border bg-background px-8 flex items-center justify-between">
      {/* bagian search */}
      <section className="relative w-105">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />

        <Input
          placeholder="Search registrations, climbers, or permits..."
          className="pl-10 h-11 bg-panel border-border"
        />
      </section>

      <section className="flex items-center gap-5">
        {/* icon bell untuk notifikasi */}
        <Bell className="w-5 h-5 text-text-secondary" />
        {/* icon settings */}
        <Settings className="w-5 h-5 text-text-secondary" />
        {/* separator */}
        <Separator orientation="vertical" className="h-6" />
      </section>
    </header>
  );
}
