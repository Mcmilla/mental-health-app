import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";  
// import { AuthProvider } from "@/app/contexts/AuthContext"; // Adjust the path as necessary

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mental AI",
  description: "Mental Assessment using speech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        
          {children}
        
      </body>
    </html>
  );
}
