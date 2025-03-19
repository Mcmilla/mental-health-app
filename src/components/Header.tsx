import ButtonLink from "./ui/ButtonLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#contact", label: "Contact" },
];

export default function Header({ showLogin = true }) {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-cyan-400">EmotionAI</h1>
        <nav className="space-x-6">
          {navLinks.map((link) => (
            <ButtonLink key={link.href} href={link.href} variant="nav">
              {link.label}
            </ButtonLink>
          ))}
          {showLogin && (
            <ButtonLink href="/Login" variant="nav">
              Login
            </ButtonLink>
          )}
        </nav>
      </div>
    </header>
  );
}
