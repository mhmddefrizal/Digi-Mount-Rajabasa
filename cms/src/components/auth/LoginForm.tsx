"use client";

import { Eye } from "lucide-react";
import { Input } from "../ui/input";

// komponen form login yang akan digunakan di halaman login
export default function LoginForm() {
  return (
    <form className="w-full max-w-md space-y-5">
      {/* Untuk input email */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-text-secondary uppercase tracking-wide">
          Operator Email
        </label>
        <Input
          placeholder="example@gmail.com"
          className="bg-input border-border focus-visible:ring-primary"
        />
      </div>

        {/* Untuk input password */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-text-secondary uppercase tracking-wide">
            Security Clearance
          </label>
          <button type="button" className="text-sm text-primary font-medium">
            Forgot?
          </button>
        </div>

        {/* field Untuk input password */}
        <div className="relative">
          <Input
            type="password"
            placeholder="••••••••"
            className="bg-input border-border pr-10 focus-visible:ring-primary"
          />
          <Eye className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        </div>
      </div>
    </form>
  );
}
