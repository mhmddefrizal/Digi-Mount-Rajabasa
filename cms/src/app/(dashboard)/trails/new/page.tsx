import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TrailEditorPage({
  searchParams,
}: {
  searchParams?: { trail?: string };
}) {
  const trailId = searchParams?.trail;
  const title = trailId ? `Edit Trail #${trailId}` : "Add New Trail";

  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-4xl leading-tight">{title}</h1>
          <p className="mt-2 text-text-secondary">
            Trail management screen is now reachable from the card actions.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/trails">Back to trails</Link>
        </Button>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Trail form</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-text-secondary">
          Area kerja trail sudah terhubung. Form penyimpanan bisa ditambahkan di tahap berikutnya.
        </CardContent>
      </Card>
    </main>
  );
}
