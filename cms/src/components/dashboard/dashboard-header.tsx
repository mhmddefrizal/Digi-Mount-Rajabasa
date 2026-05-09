import { Search } from "lucide-react";
import { Input } from "../ui/input";

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
    </header>
  );
}
