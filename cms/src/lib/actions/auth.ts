import { AuthResponse, LoginFormData } from "@/types/auth";

// pembuatan fungsi untuk melakukan login, menerima data login dan mengembalikan response dari server
export async function loginAction(data: LoginFormData): Promise<AuthResponse> {

    const { username, password } = data;

    // validasi sederhana untuk memastikan username dan password tidak kosong
    if (!username || !password) {
        return {
            success: false,
            message: "Username and password are required.",
        };
    }

    // simulasi proses login, dalam implementasi nyata, Anda akan melakukan request ke server untuk memverifikasi kredensial
    if (username === "demo@summitlog.com" && password === "summit123") {
    return {
      success: true,
      redirectTo: "/dashboard",
    };
  }
//   jika kredensial tidak valid, kembalikan response dengan success false dan pesan error
  return {
    success: false,
    message: "Username atau password tidak valid.",
  };
}