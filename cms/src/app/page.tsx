import { redirect } from "next/navigation";

// halaman root yang langsung mengarahkan pengguna ke halaman login
export default function RootPage() {
  redirect("/login");
}