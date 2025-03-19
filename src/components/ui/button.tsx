import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "sm" | "default" | "lg";
}

export default function Button({
  href,
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg shadow-lg transition hover:scale-105";
  
  const variantStyles = {
    default: "bg-cyan-400 text-gray-900 hover:bg-cyan-300",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    ghost: "text-gray-700 hover:bg-gray-200",
    link: "text-cyan-400 underline-offset-4 hover:underline",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
