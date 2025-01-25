import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface WeatherSearchProps {
  inputCity: string;
  setInputCity: (city: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const WeatherSearch = ({ inputCity, setInputCity, handleSubmit }: WeatherSearchProps) => (
  <form onSubmit={handleSubmit} className="flex gap-4 max-w-xl mx-auto">
    <Input
      type="text"
      value={inputCity}
      onChange={(e) => setInputCity(e.target.value)}
      placeholder="Entrez une ville..."
      className="bg-white/90 text-lg py-6"
    />
    <Button type="submit" size="icon" className="h-14 w-14">
      <Search className="h-6 w-6" />
    </Button>
  </form>
);