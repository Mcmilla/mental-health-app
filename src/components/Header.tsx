"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ButtonLink from "./ui/ButtonLink";

export default function Header() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve user from local storage if available
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Navigation links for unauthenticated users
  const publicNavLinks = [
    { href: "/", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#contact", label: "Contact" },
  ];

  // Navigation links for authenticated users
  const authNavLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/profile", label: "Profile" },
  ];

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    setUser(null); // Clear state
    router.push("/Login"); // Redirect to login page
  };

  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-cyan-400">EmotionAI</h1>
        <nav className="space-x-6 flex items-center">
          {(user ? authNavLinks : publicNavLinks).map((link) => (
            <ButtonLink key={link.href} href={link.href} variant="nav">
              {link.label}
            </ButtonLink>
          ))}
          {user ? (
            <>
              <span className="text-sm text-gray-300 ml-4">Hi, {user.name}</span>
              <button onClick={handleLogout} className="ml-4 text-sm text-cyan-400 hover:underline">
                Logout
              </button>
            </>
          ) : (
            <ButtonLink href="/Login" variant="nav">
              Login
            </ButtonLink>
          )}
        </nav>
      </div>
    </header>
  );
}
