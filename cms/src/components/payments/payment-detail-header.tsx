 "use client";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { PaymentDetail } from "@/lib/mock-data";

interface Props {
  payment: PaymentDetail;
}

function escapePdfText(value: string) {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function buildInvoicePdf(payment: PaymentDetail) {
  const lines = [
    "DigiMount Rajabasa Payment Invoice",
    `Transaction ID: ${payment.id}`,
    `Group: ${payment.groupName}`,
    `Leader: ${payment.leader}`,
    `Route: ${payment.route}`,
    `Status: ${payment.status.toUpperCase()}`,
    `Total: Rp ${payment.total.toLocaleString("id-ID")}`,
  ];

  const content = lines
    .map((line, index) => {
      const y = 780 - index * 22;
      const fontSize = index === 0 ? 18 : 12;
      return `BT /F1 ${fontSize} Tf 50 ${y} Td (${escapePdfText(line)}) Tj ET`;
    })
    .join("\n");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n",
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
    `5 0 obj\n<< /Length ${content.length} >>\nstream\n${content}\nendstream\nendobj\n`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  for (const object of objects) {
    offsets.push(pdf.length);
    pdf += object;
  }

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  for (let index = 1; index < offsets.length; index += 1) {
    pdf += `${offsets[index].toString().padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefStart}\n%%EOF`;

  return new Blob([pdf], { type: "application/pdf" });
}

function getStatusStyles(status: PaymentDetail["status"]) {
  if (status === "paid") {
    return "bg-green-100 text-green-700";
  }

  if (status === "pending") {
    return "bg-yellow-100 text-yellow-800";
  }

  return "bg-red-100 text-red-700";
}

// komponen PaymentDetailHeader untuk menampilkan header detail pembayaran
export default function PaymentDetailHeader({ payment }: Props) {
    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        const file = buildInvoicePdf(payment);
        const url = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = url;
        link.download = `invoice-${payment.id}.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    };

    return (
        // header dengan judul dan status pembayaran
        <header className="flex items-start justify-between">
            <article>
                <div className="flex items-center gap-3">
                    <h1 className="font-display text-5xl">
                        {payment.id}
                    </h1>
                    <Badge className={getStatusStyles(payment.status)}>
                        {payment.status.toUpperCase()}
                    </Badge>
                </div>
                <p className="mt-2 text-text-secondary">
                    {payment.groupName}
                </p>
            </article>
            {/* Action Buttons */}
            <div className="flex gap-3">
                <Button variant="outline" onClick={handlePrint}>
                    Print Invoice
                </Button>
                <Button onClick={handleDownload}>
                    Download PDF
                </Button>
            </div>
        </header>
    )
}
