import styles from "./button.module.css";

type ButtonVariant = "primary" | "secondary" | "danger";

// definisi tipe untuk props Button, termasuk variant, fullWidth, dan children
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    fullWidth?: boolean;
    children: React.ReactNode;
}

// komponen Button yang menerima props sesuai dengan ButtonProps, dengan default variant "primary" dan fullWidth false
export default function Button({
    variant = "primary",
    fullWidth = false,
    children,
    className = "",
    ...props
}: ButtonProps) {
    return (
        // menggabungkan kelas CSS berdasarkan variant, fullWidth, dan className tambahan yang diterima dari props
        <button
            className={[
                styles.btn,
                styles[variant],
                fullWidth ? styles.fullWidth : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        >
            {children}
        </button>
    );
}