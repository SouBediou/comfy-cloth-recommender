import { WeatherWidget } from "./WeatherWidget";

export const LocationSection = () => (
  <section className="mb-12 w-full">
    <h2 className="text-2xl font-semibold mb-4">Où suis-je?</h2>
    <div className="w-full">
      <WeatherWidget />
    </div>
  </section>
);