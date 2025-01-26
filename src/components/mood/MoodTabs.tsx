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

  const allTabs: MoodTab[] = [
    { value: "bureau", label: "Bureau & Meeting", icon: <Briefcase className="w-4 h-4" /> },
    { value: "entretien", label: "Entretien", icon: <Calendar className="w-4 h-4" /> },
    { value: "relax", label: "Relax & Week-end", icon: <Coffee className="w-4 h-4" /> },
    { value: "ceremonie", label: "Cérémonie & Cocktail", icon: <GlassWater className="w-4 h-4" /> },
    { value: "night", label: "Night & Party", icon: <Music className="w-4 h-4" /> },
    { value: "crush", label: "Crush & Date", icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full">
      <TabsList className={`
        flex flex-row gap-4 bg-transparent w-full overflow-x-auto pb-4
        ${isMobile ? 'px-4' : 'justify-center'}
      `}>
        {allTabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`
              min-w-[96px] h-24 rounded-full flex-shrink-0
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
    </div>
  );
};