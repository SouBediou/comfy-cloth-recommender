import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-[#090322] text-white">
    <Logo />
    <Navigation />
    <main className="pt-8">
      {children}
    </main>
  </div>
);