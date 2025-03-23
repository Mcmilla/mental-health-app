"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on login and signup pages
  if (pathname === "/Login" || pathname === "/Signup") return null;

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-700">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        {/* Branding Section */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold text-white">EmotionAI</h2>
          <p className="text-sm text-gray-400 mt-1">Empowering Mental Health with AI</p>
        </div>

        {/* Contact Info */}
        <div className="mb-6 lg:mb-0">
          <p className="text-sm">
            Contact us:{" "}
            <a href="mailto:support@emotionai.com" className="text-cyan-400 hover:underline">
              support@emotionai.com
            </a>
          </p>
          <p className="text-sm">Phone: +254 712 345 678</p>
        </div>

        {/* Copyright & Legal Links */}
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} EmotionAI. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-1">
            <a href="/privacy" className="hover:underline">Privacy Policy</a> |{" "}
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
