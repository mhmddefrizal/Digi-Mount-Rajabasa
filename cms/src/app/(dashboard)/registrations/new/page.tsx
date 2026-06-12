import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewRegistrationPage() {
  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-4xl leading-tight">New Registration</h1>
          <p className="mt-2 text-text-secondary">
            Create a registration record from this workspace.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/registrations">Back to registrations</Link>
        </Button>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Registration form</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-text-secondary">
          Formulir pembuatan registration belum terhubung ke backend, tetapi halaman dan navigasinya sudah aktif.
        </CardContent>
      </Card>
    </main>
  );
}
