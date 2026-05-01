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
}: ButtonProps) {}