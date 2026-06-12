"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const trailOptions = [
  { label: "All Trails", value: "all" },
  { label: "Jalur Utama", value: "Jalur Utama" },
  { label: "Jalur Pematang", value: "Jalur Pematang" },
  { label: "Jalur Canggung", value: "Jalur Canggung" },
] as const;

const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Pending", value: "Pending" },
  { label: "Verified", value: "Verified" },
  { label: "Completed", value: "Completed" },
] as const;

type TrailFilter = (typeof trailOptions)[number]["value"];
type StatusFilter = (typeof statusOptions)[number]["value"];

interface Props {
  trailFilter: TrailFilter;
  statusFilter: StatusFilter;
  onTrailFilterChange: (value: TrailFilter) => void;
  onStatusFilterChange: (value: StatusFilter) => void;
}

// tambah filter untuk registration, seperti filter berdasarkan tanggal, status, dll.
export default function RegistrationFilters({
  trailFilter,
  statusFilter,
  onTrailFilterChange,
  onStatusFilterChange,
}: Props) {
  return (
    // section untuk bagian filter
    <section className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-3">
        {/* tombol untuk melihat semua trail */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="min-w-44 h-10 justify-between px-4 text-sm text-text-secondary"
            >
              {trailOptions.find((option) => option.value === trailFilter)?.label}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuRadioGroup
              value={trailFilter}
              onValueChange={(value) => onTrailFilterChange(value as TrailFilter)}
            >
              {trailOptions.map((option) => (
                <DropdownMenuRadioItem key={option.value} value={option.value}>
                  {option.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* tombol untuk melihat semua status */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="min-w-44 h-10 justify-between px-4 text-sm text-text-secondary"
            >
              {statusOptions.find((option) => option.value === statusFilter)?.label}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuRadioGroup
              value={statusFilter}
              onValueChange={(value) => onStatusFilterChange(value as StatusFilter)}
            >
              {statusOptions.map((option) => (
                <DropdownMenuRadioItem key={option.value} value={option.value}>
                  {option.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* tombol untuk menambah registration */}
      <Button asChild className="h-10 bg-primary hover:bg-primary-light text-white shadow-[var(--shadow-button)]">
        <Link href="/registrations/new">+ New Registration</Link>
      </Button>
    </section>
  );
}
