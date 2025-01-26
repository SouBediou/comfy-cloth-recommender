import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const menuItems = [
    { label: "Make Me Pretty", path: "/make-me-pretty" },
    { label: "My Closet Paradise", path: "/my-closet-paradise" },
    { label: "Paramètres", path: "/settings" },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 text-white hover:bg-[#c451c9]/20 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent className="w-[300px] bg-[#090322] border-l border-[#c451c9]/20">
          <nav className="flex flex-col gap-4 mt-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:text-[#c451c9] transition-colors px-4 py-2 rounded-lg hover:bg-[#c451c9]/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};