import { WeatherWidget } from "./WeatherWidget";

export const LocationSection = () => (
  <section className="mb-12 w-full">
    <h2 className="text-2xl font-semibold mb-4">Spot du jour</h2>
    <div className="w-full">
      <WeatherWidget />
    </div>
  </section>
);