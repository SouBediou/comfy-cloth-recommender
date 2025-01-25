import React from "react";
import { Logo } from "./Logo";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-[#0F0B1E] text-white">
    <Logo />
    <main className="pt-8">
      {children}
    </main>
  </div>
);