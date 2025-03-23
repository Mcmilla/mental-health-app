import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "button" | "nav";
  onClick?: () => void;
}

export default function ButtonLink({
  href,
  children,
  className = "",
  variant = "button",
  onClick,
}: ButtonLinkProps) {
  const baseStyles =
    "px-6 py-3 font-semibold rounded-lg transition hover:scale-105";
  
  const buttonStyles =
    "bg-cyan-400 text-gray-900 shadow-lg hover:bg-cyan-300";
  
  const navStyles =
    "text-gray-300 bg-transparent hover:text-cyan-300 px-2 py-1";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variant === "button" ? buttonStyles : navStyles} ${className}`}
    >
      {children}
    </Link>
  );
}
