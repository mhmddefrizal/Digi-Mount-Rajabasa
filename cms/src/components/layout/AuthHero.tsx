// komponen ini digunakan untuk menampilkan bagian hero pada halaman login dan register
import Image from "next/image";

export default function AuthHero() {
  return (
    // bagian hero yang hanya tampil pada layar besar (lg) dan memiliki gambar latar belakang gunung yang menarik
    <section className="relative hidden lg:flex w-1/2 h-screen text-white">
      <Image
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=https://unsplash.com/photos/ice-capped-mountain-at-daytime-xfngap_DToEeyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt="Mountain Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <article className="relative z-10 flex flex-col justify-between p-10 w-full">
        {/* Logo */}
        <header className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-bold">
            ⛰
          </div>
          <span className="font-display tracking-wide text-lg">
            DigiMount Rajabasa
          </span>
        </header>
        {/* Middle text */}
        <div className="max-w-md">
          <h1 className="text-lg font-semibold mb-2">
            Peak performance starts with precise logistics.
          </h1>
          <p className="text-sm text-white/80">
            Manage expeditions, track climber safety, and coordinate complex
            mountain operations with technical precision.
          </p>
        </div>
        {/* Bottom stats */}
        <footer className="flex gap-10 text-sm">
          <div>
            <p className="text-primary">PEAKS</p>
            <p>8,848m</p>
          </div>
          <div>
            <p className="text-primary">ACTIVE</p>
            <p>124</p>
          </div>
          <div>
            <p className="text-primary">STATUS</p>
            <p>SECURE</p>
          </div>
        </footer>
      </article>
    </section>
  );
}
