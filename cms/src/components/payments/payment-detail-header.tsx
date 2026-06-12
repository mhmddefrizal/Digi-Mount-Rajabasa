import { Badge } from "../ui/badge";

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
            </article>
        </header>
    )
}