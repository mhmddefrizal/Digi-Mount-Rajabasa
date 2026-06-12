import Link from "next/link";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RegistrationItem } from "@/lib/mock-data";

interface Props {
  registrations: RegistrationItem[];
}

// komponen untuk menampilkan tabel pendaftaran
export default function RegistrationTable({ registrations }: Props) {
  return (
    <section>
      <Card>
        {/* header untuk tabel pendaftaran */}
        <CardHeader>
          <CardTitle>Active Applications</CardTitle>
        </CardHeader>

        {/* content untuk tabel pendaftaran */}
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                {/* header tabel */}
                <tr className="border-b border-border">
                  <th className="text-left py-4">Registration ID</th>
                  <th className="text-left py-4">Leader Name</th>
                  <th className="text-left py-4">Trail</th>
                  <th className="text-left py-4">Status</th>
                  <th className="text-left py-4">Registered At</th>
                  <th className="text-left py-4">Action</th>
                </tr>
              </thead>
              {/* body tabel */}
              <tbody>
                {registrations.map((item) => (
                  <tr key={item.id} className="border-b border-border">
                    <td className="py-5 font-medium">{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.route}</td>
                    <td>{item.status}</td>
                    <td>{item.createdAt}</td>
                    <td>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/registrations/${item.id}`}>Details</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
