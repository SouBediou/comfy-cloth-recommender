import React from "react";
import { Logo } from "./Logo";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-[#0F0B1E] text-white">
    <Logo />
    <div className="container mx-auto px-4 py-8 space-y-8">
      {children}
    </div>
  </div>
);