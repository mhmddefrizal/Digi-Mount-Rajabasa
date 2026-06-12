import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

// komponen PaymentDetailHeader untuk menampilkan header detail pembayaran
export default function PaymentDetailHeader() {
    return (
        // header dengan judul dan status pembayaran
        <header className="flex items-start justify-between">
            <article>
                <div className="flex items-center gap-3">
                    <h1 className="font-display text-5xl">
                        {/* Transaction ID (Dummy) */}
                        #TRX-8842  
                    </h1>
                    <Badge className="bg-green-100 text-green-700">
                        Paid
                    </Badge>
                </div>
                {/* Expedition Description (Dummy) */}
                <p className="mt-2 text-text-secondary">
                    {/* Expedition Name (Dummy) */}
                    Eiger Vanguard Expedition
                </p>
            </article>
            {/* Action Buttons */}
            <div className="flex gap-3">
                <Button variant="outline">
                    Print Invoice
                </Button>
                <Button>
                    Download PDF
                </Button>
            </div>
        </header>
    )
}