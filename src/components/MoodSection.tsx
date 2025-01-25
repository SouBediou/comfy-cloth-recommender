import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const MoodSection = () => (
  <section className="mt-16">
    <h2 className="text-2xl font-semibold mb-6">Mood du jour</h2>
    <Tabs defaultValue="bureau" className="w-full">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          <TabsList className="flex flex-col w-full bg-[#3d3851]/[0.21]">
            <TabsTrigger 
              value="bureau" 
              className="w-full justify-start p-4 text-[#dcd7d7] data-[state=active]:bg-[#4a4461] data-[state=active]:text-white"
            >
              Bureau & Meeting
            </TabsTrigger>
            <TabsTrigger 
              value="entretien" 
              className="w-full justify-start p-4 text-[#dcd7d7] data-[state=active]:bg-[#4a4461] data-[state=active]:text-white"
            >
              Entretien
            </TabsTrigger>
            <TabsTrigger 
              value="relax" 
              className="w-full justify-start p-4 text-[#dcd7d7] data-[state=active]:bg-[#4a4461] data-[state=active]:text-white"
            >
              Relax & Week-end
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Right Column */}
        <div>
          <TabsList className="flex flex-col w-full bg-[#3d3851]/[0.21]">
            <TabsTrigger 
              value="ceremonie" 
              className="w-full justify-start p-4 text-[#dcd7d7] data-[state=active]:bg-[#4a4461] data-[state=active]:text-white"
            >
              Cérémonie & Cocktail
            </TabsTrigger>
            <TabsTrigger 
              value="night" 
              className="w-full justify-start p-4 text-[#dcd7d7] data-[state=active]:bg-[#4a4461] data-[state=active]:text-white"
            >
              Night & Party
            </TabsTrigger>
            <TabsTrigger 
              value="crush" 
              className="w-full justify-start p-4 text-[#dcd7d7] data-[state=active]:bg-[#4a4461] data-[state=active]:text-white"
            >
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
);