import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, UserRound, Palmtree, GlassWater, Music, Heart } from "lucide-react";

interface MoodTab {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface MoodTabsColumnProps {
  tabs: MoodTab[];
}

const MoodTabsColumn = ({ tabs }: MoodTabsColumnProps) => (
  <div>
    <TabsList className="flex flex-col w-full bg-[#3d3851]/[0.21]">
      {tabs.map((tab) => (
        <TabsTrigger
          key={tab.value}
          value={tab.value}
          className="w-full justify-start p-4 text-[#dcd7d7] data-[state=active]:bg-[#4a4461] data-[state=active]:text-white flex items-center gap-3"
        >
          {tab.icon}
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>
  </div>
);

export const MoodTabs = () => {
  const leftColumnTabs: MoodTab[] = [
    { value: "bureau", label: "Bureau & Meeting", icon: <Briefcase className="w-6 h-6" /> },
    { value: "entretien", label: "Entretien", icon: <UserRound className="w-6 h-6" /> },
    { value: "relax", label: "Relax & Week-end", icon: <Palmtree className="w-6 h-6" /> },
  ];

  const rightColumnTabs: MoodTab[] = [
    { value: "ceremonie", label: "Cérémonie & Cocktail", icon: <GlassWater className="w-6 h-6" /> },
    { value: "night", label: "Night & Party", icon: <Music className="w-6 h-6" /> },
    { value: "crush", label: "Crush & Date", icon: <Heart className="w-6 h-6" /> },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <MoodTabsColumn tabs={leftColumnTabs} />
      <MoodTabsColumn tabs={rightColumnTabs} />
    </div>
  );
};