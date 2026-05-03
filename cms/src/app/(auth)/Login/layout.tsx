
// halaman layout untuk halaman login
// import komponen auth hero
import AuthHero from "@/components/layout/AuthHero";
export default function LoginLayout({
    // penambahan properti children untuk menampilkan konten halaman login di sebelah kanan hero
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <AuthHero />
            <div className="flex flex-1">{children}</div>
        </div>
    );
}