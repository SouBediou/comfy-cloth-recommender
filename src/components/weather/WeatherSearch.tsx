import React from "react";
import { Input } from "@/components/ui/input";

interface WeatherSearchProps {
  inputCity: string;
  setInputCity: (city: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const WeatherSearch = ({ inputCity, setInputCity, handleSubmit }: WeatherSearchProps) => (
  <form onSubmit={handleSubmit}>
    <Input
      type="text"
      value={inputCity}
      onChange={(e) => setInputCity(e.target.value)}
      placeholder="Paris"
      className="bg-white/90 text-lg py-6 text-black rounded-lg"
    />
  </form>
);