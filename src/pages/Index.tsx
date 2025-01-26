import React, { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { WeatherWidget } from "@/components/WeatherWidget";
import { getWeather } from "@/utils/weatherApi";
import { MoodSection } from "@/components/MoodSection";

const Index = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [context, setContext] = useState("casual");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        const weather = await getWeather("Paris");
        setRecommendations([]);
      } catch (error) {
        console.error("Erreur lors du chargement des recommandations:", error);
      }
    };

    loadRecommendations();
  }, [context]);

  const Logo = () => (
    <div className="absolute top-2 left-6 w-24">
      <img
        src="/lovable-uploads/23f4a87b-e26b-4b7e-86a8-5fd4585550ca.png"
        alt="Lookin'good"
        className="w-full h-auto"
      />
    </div>
  );

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-[#0F0B1E] flex flex-col items-center justify-center p-4">
        <Logo />
        <div className="w-full max-w-md space-y-8 text-center mt-20 md:mt-0">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Let's Get
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-[#D946EF] animate-pulse">
              Started!
            </h1>
          </div>

          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] opacity-20 blur-xl rounded-full" />
            <div className="relative">
              <img
                src="/lovable-uploads/6d34fe06-9b60-42bf-8bbd-58f07f9208fc.png"
                alt="Clothes rack"
                className="w-[95%] h-[95%] object-contain mx-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => setIsStarted(true)}
              className="w-1/2 mx-auto h-14 text-lg bg-[#D946EF] hover:bg-[#C935DE] transition-colors rounded-md text-white"
            >
              SIGN IN
            </button>

            <div className="pt-8 text-gray-400 text-sm">
              DIDN'T HAVE ACCOUNT?{" "}
              <button 
                onClick={() => setIsStarted(true)}
                className="text-[#D946EF] hover:underline"
              >
                SIGN UP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Logo />
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-300 mb-8">Votre assistant vestimentaire intelligent</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Votre ville ?</h2>
            <WeatherWidget />
            <MoodSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;