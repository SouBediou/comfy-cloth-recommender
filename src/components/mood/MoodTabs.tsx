import React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, Coffee, GlassWater, Music, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MoodTab {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const MoodTabs = () => {
  const isMobile = useIsMobile();

  const firstRowTabs: MoodTab[] = [
    { value: "bureau", label: "Bureau & Meeting", icon: <Briefcase className="w-4 h-4" /> },
    { value: "entretien", label: "Entretien", icon: <Calendar className="w-4 h-4" /> },
    { value: "relax", label: "Relax & Week-end", icon: <Coffee className="w-4 h-4" /> },
  ];

  const secondRowTabs: MoodTab[] = [
    { value: "ceremonie", label: "Cérémonie & Cocktail", icon: <GlassWater className="w-4 h-4" /> },
    { value: "night", label: "Night & Party", icon: <Music className="w-4 h-4" /> },
    { value: "crush", label: "Crush & Date", icon: <Heart className="w-4 h-4" /> },
  ];

  const renderTabRow = (tabs: MoodTab[]) => (
    <TabsList className={`
      grid grid-cols-3 gap-2 bg-transparent w-full max-w-2xl mx-auto
      ${isMobile ? 'overflow-x-auto pb-4 px-4' : ''}
    `}>
      {tabs.map((tab) => (
        <TabsTrigger
          key={tab.value}
          value={tab.value}
          className={`
            w-24 h-24 rounded-full
            flex flex-col items-center justify-center gap-1
            bg-[#3d3851]/25 hover:bg-[#3d3851]/40
            text-[#dcd7d7] transition-all duration-200
            data-[state=active]:bg-[#3d3851] data-[state=active]:text-white
            p-4
          `}
        >
          {tab.icon}
          <span className="text-center whitespace-normal leading-tight text-[10px]">
            {tab.label.split(" & ").map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < tab.label.split(" & ").length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
        </TabsTrigger>
      ))}
    </TabsList>
  );

  return (
    <div className="w-full flex flex-col gap-6">
      {renderTabRow(firstRowTabs)}
      {renderTabRow(secondRowTabs)}
    </div>
  );
};