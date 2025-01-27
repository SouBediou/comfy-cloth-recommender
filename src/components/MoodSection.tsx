import { Tabs, TabsContent } from "@/components/ui/tabs";
import { MoodTabs } from "./mood/MoodTabs";
import { TabContent } from "./mood/TabContent";

export const MoodSection = () => (
  <section>
    <Tabs defaultValue="bureau" className="w-full">
      <MoodTabs />
      
      <div className="mt-12">
        <TabsContent value="bureau">
          <TabContent 
            title="Bureau & Meeting"
            description="Suggestions vestimentaires pour vos journées au bureau."
          />
        </TabsContent>
        
        <TabsContent value="entretien">
          <TabContent 
            title="Entretien"
            description="Tenues professionnelles pour vos entretiens importants."
          />
        </TabsContent>
        
        <TabsContent value="relax">
          <TabContent 
            title="Relax & Week-end"
            description="Looks décontractés pour vos moments de détente."
          />
        </TabsContent>
        
        <TabsContent value="ceremonie">
          <TabContent 
            title="Cérémonie & Cocktail"
            description="Tenues élégantes pour vos événements spéciaux."
          />
        </TabsContent>
        
        <TabsContent value="night">
          <TabContent 
            title="Night & Party"
            description="Styles festifs pour vos soirées."
          />
        </TabsContent>
        
        <TabsContent value="crush">
          <TabContent 
            title="Crush & Date"
            description="Looks séduisants pour vos rendez-vous galants."
          />
        </TabsContent>
      </div>
    </Tabs>
  </section>
);