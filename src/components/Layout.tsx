// components/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer"

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-indigo-700 to-gray-900 text-gray-200 min-h-screen flex flex-col">
      
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; // ✅ Ensure it's exported correctly
