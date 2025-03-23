"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ButtonLink from "./ui/ButtonLink";

export default function Header() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Retrieve user info from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);

  // Time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 21) return "Good evening";
    return "Good night";
  };

  // Logout handler that also closes the mobile menu
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
    router.push("/Login");
  };

  // Hide header on Login & Signup pages
  if (["/Login", "/Signup"].includes(pathname)) return null;

  // Render mobile nav links with onClick that closes the menu
  const renderMobileNavLinks = () => {
    if (user) {
      return (
        <>
          <ButtonLink href="/dashboard" variant="nav" onClick={() => setMenuOpen(false)}>
            Dashboard
          </ButtonLink>
          <ButtonLink href="/profile" variant="nav" onClick={() => setMenuOpen(false)}>
            Profile
          </ButtonLink>
          <ButtonLink href="/settings" variant="nav" onClick={() => setMenuOpen(false)}>
            Settings
          </ButtonLink>
          <span className="text-sm text-gray-300">
            {getGreeting()}, {user.name.split(" ")[0]}
          </span>
          <button
            onClick={handleLogout}
            className="px-6 py-3 font-semibold rounded-lg transition hover:scale-105 text-gray-300 bg-transparent hover:text-cyan-300"
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <>
          <ButtonLink href="/" variant="nav" onClick={() => setMenuOpen(false)}>
            Home
          </ButtonLink>
          <ButtonLink href="/#features" variant="nav" onClick={() => setMenuOpen(false)}>
            Features
          </ButtonLink>
          <ButtonLink href="/#contact" variant="nav" onClick={() => setMenuOpen(false)}>
            Contact
          </ButtonLink>
          <ButtonLink href="/Login" variant="nav" onClick={() => setMenuOpen(false)}>
            Login
          </ButtonLink>
        </>
      );
    }
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">EmotionAI</h1>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {user ? (
            <>
              <ButtonLink href="/dashboard" variant="nav">Dashboard</ButtonLink>
              <ButtonLink href="/profile" variant="nav">Profile</ButtonLink>
              <ButtonLink href="/settings" variant="nav">Settings</ButtonLink>
              <span className="text-sm text-gray-300">
                {getGreeting()}, {user.name.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm text-cyan-400 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <ButtonLink href="/" variant="nav">Home</ButtonLink>
              <ButtonLink href="/#features" variant="nav">Features</ButtonLink>
              <ButtonLink href="/#contact" variant="nav">Contact</ButtonLink>
              <ButtonLink href="/Login" variant="nav">Login</ButtonLink>
            </>
          )}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-cyan-400 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Navigation: Render only when menuOpen is true */}
      {menuOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-gray-900/95 backdrop-blur-lg shadow-md p-6 transition-transform duration-300">
          <nav className="flex flex-col space-y-4 items-center">
            {renderMobileNavLinks()}
          </nav>
        </div>
      )}
    </header>
  );
}
