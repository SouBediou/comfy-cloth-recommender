import React from "react";
import { WeatherWidget } from "@/components/WeatherWidget";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Accueil = () => {
  const Logo = () => (
    <div className="absolute top-2 left-6 w-24">
      <img
        src="/lovable-uploads/23f4a87b-e26b-4b7e-86a8-5fd4585550ca.png"
        alt="Lookin'good"
        className="w-full h-auto"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F0B1E] text-white">
      <Logo />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <h1 className="text-4xl font-bold text-[#D946EF] text-center mb-12">
          My Lookin'Good
        </h1>

        {/* Où suis-je? Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Où suis-je?</h2>
          <div className="max-w-md">
            <WeatherWidget />
          </div>
        </section>

        {/* Mood du jour Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Mood du jour</h2>
          <Tabs defaultValue="bureau" className="w-full">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-2">
                <TabsList className="flex flex-col w-full">
                  <TabsTrigger value="bureau" className="w-full justify-start p-4">
                    Bureau & Meeting
                  </TabsTrigger>
                  <TabsTrigger value="entretien" className="w-full justify-start p-4">
                    Entretien
                  </TabsTrigger>
                  <TabsTrigger value="relax" className="w-full justify-start p-4">
                    Relax & Week-end
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                <TabsList className="flex flex-col w-full">
                  <TabsTrigger value="ceremonie" className="w-full justify-start p-4">
                    Cérémonie & Cocktail
                  </TabsTrigger>
                  <TabsTrigger value="night" className="w-full justify-start p-4">
                    Night & Party
                  </TabsTrigger>
                  <TabsTrigger value="crush" className="w-full justify-start p-4">
                    Crush & Date
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {/* Tab Contents */}
            <div className="mt-6">
              <TabsContent value="bureau">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Bureau & Meeting</h3>
                    <p>Suggestions vestimentaires pour vos journées au bureau.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="entretien">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Entretien</h3>
                    <p>Tenues professionnelles pour vos entretiens importants.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="relax">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Relax & Week-end</h3>
                    <p>Looks décontractés pour vos moments de détente.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ceremonie">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Cérémonie & Cocktail</h3>
                    <p>Tenues élégantes pour vos événements spéciaux.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="night">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Night & Party</h3>
                    <p>Styles festifs pour vos soirées.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="crush">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Crush & Date</h3>
                    <p>Looks séduisants pour vos rendez-vous galants.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </section>
      </div>
    </div>
  );
};

export default Accueil;