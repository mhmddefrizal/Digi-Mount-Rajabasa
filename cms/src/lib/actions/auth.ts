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
}