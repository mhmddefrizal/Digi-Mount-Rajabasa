import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRegistration } from "@/lib/mock-data";

export default function RegistrationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const registration = getRegistration(params.id);

  if (!registration) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-4xl leading-tight">{registration.id}</h1>
          <p className="mt-2 text-text-secondary">{registration.name}</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/registrations">Back to registrations</Link>
        </Button>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Registration Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-xs text-text-muted">Route</p>
            <p className="font-medium">{registration.route}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted">Status</p>
            <p className="font-medium">{registration.status}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted">Registered At</p>
            <p className="font-medium">{registration.createdAt}</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
