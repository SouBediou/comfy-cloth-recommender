import React from "react";

export const WeatherSkeleton = () => (
  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-8 animate-pulse">
    <div className="h-8 bg-blue-400/50 rounded w-32 mb-4"></div>
    <div className="h-4 bg-blue-400/50 rounded w-48"></div>
  </div>
);