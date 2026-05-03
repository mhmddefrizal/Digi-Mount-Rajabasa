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
    // bagian utama yang membagi layar menjadi dua, bagian kiri untuk hero dan bagian kanan untuk form login
    <main className="flex min-h-screen">
      <AuthHero />

      {/* Right Panel */}
      <section className="flex w-full lg:w-1/2 items-center justify-center bg-panel px-6">
        {children}
      </section>
    </main>
  );
}
