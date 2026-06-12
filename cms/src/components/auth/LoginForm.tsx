"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { loginAction } from "@/lib/actions/auth";

// komponen form login yang akan digunakan di halaman login
export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [keepSession, setKeepSession] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const result = await loginAction({
      username: String(formData.get("username") ?? ""),
      password: String(formData.get("password") ?? ""),
      keepSession,
    });

    setIsSubmitting(false);

    if (result.success && result.redirectTo) {
      router.push(result.redirectTo);
      return;
    }

    setError(result.message ?? "Login failed.");
  };

  const handleForgotPassword = () => {
    window.location.href = "mailto:support@digimount.local?subject=Password%20Reset";
  };

  return (
    <form className="w-full max-w-md space-y-5" onSubmit={handleSubmit}>
      {/* Untuk input email */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-text-secondary uppercase tracking-wide">
          Operator Email
        </label>
        <Input
          name="username"
          placeholder="example@gmail.com"
          autoComplete="username"
          className="bg-input border-border focus-visible:ring-primary"
        />
      </div>

      {/* Untuk input password */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-text-secondary uppercase tracking-wide">
            Security Clearance
          </label>
          <button
            type="button"
            className="text-sm text-primary font-medium"
            onClick={handleForgotPassword}
          >
            Forgot?
          </button>
        </div>

        {/* field Untuk input password */}
        <div className="relative">
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            autoComplete="current-password"
            className="bg-input border-border pr-10 focus-visible:ring-primary"
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
            onClick={() => setShowPassword((current) => !current)}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <Checkbox
          className="border-2px"
          id="remember"
          checked={keepSession}
          onCheckedChange={(value) => setKeepSession(value === true)}
        />
        <label htmlFor="remember">Keep me logged in for this session</label>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      {/* Login Button */}
      <Button className="w-full bg-primary text-white hover:bg-primary-light" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Log In"}
      </Button>
    </form>
  );
}
