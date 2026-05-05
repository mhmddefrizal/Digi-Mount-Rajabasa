// pembuatan interface untuk data login
export interface LoginFormData {
    username: string;
    password: string;
    keepSession: boolean;
}

// pembuatan interface untuk data response login
export interface AuthResponse {
    success: boolean;
    message: string;
    token?: string; // token opsional, hanya ada jika login berhasil
    redirectTo?: string; // URL untuk redirect setelah login berhasil, opsional
}

// pembuatan interface untuk data statistik yang akan ditampilkan di dashboard
export interface StatItem {
    label: string;
    value: string;
}