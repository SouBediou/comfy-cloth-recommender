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
    { value: "bureau", label: "Bureau & Meeting", icon: <Briefcase className="w-6 h-6" /> },
    { value: "entretien", label: "Entretien", icon: <Calendar className="w-6 h-6" /> },
    { value: "relax", label: "Relax & Week-end", icon: <Coffee className="w-6 h-6" /> },
    { value: "ceremonie", label: "Cérémonie & Cocktail", icon: <GlassWater className="w-6 h-6" /> },
    { value: "night", label: "Night & Party", icon: <Music className="w-6 h-6" /> },
    { value: "crush", label: "Crush & Date", icon: <Heart className="w-6 h-6" /> },
  ];

  return (
    <div className="w-full px-4">
      <TabsList className={`
        flex flex-row gap-4 bg-transparent w-full overflow-x-auto
        py-4 px-2 mx-[-1rem]
        ${isMobile ? 'justify-start' : 'justify-center'}
      `}>
        {allTabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`
              min-w-[144px] h-36 rounded-full flex-shrink-0
              flex flex-col items-center justify-center gap-2
              bg-[#81017d]/25 hover:bg-[#81017d]/40
              text-[#dcd7d7] transition-all duration-200
              data-[state=active]:bg-[#81017d] data-[state=active]:text-white
              p-6
            `}
          >
            {tab.icon}
            <span className="text-center whitespace-normal leading-tight text-sm">
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