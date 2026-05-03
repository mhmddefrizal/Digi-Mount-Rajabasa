// halaman login yang menampilkan form login
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    // section untuk menampilkan form login dengan header
    <section>
      <header className="mb-10">
        <h1 className="text-[22px] font-semibold tracking-tight">
          Access Expedition Portal
        </h1>
        <p className="text-sm text-text-secondary mt-2 leading-relaxed">
          Enter your credentials to manage active summits.
        </p>
      </header>
      <LoginForm />
    </section>
  );
}
