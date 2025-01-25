import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MoodTab {
  value: string;
  label: string;
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
          className="w-full justify-start p-4 text-[#dcd7d7] data-[state=active]:bg-[#4a4461] data-[state=active]:text-white"
        >
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>
  </div>
);

export const MoodTabs = () => {
  const leftColumnTabs: MoodTab[] = [
    { value: "bureau", label: "Bureau & Meeting" },
    { value: "entretien", label: "Entretien" },
    { value: "relax", label: "Relax & Week-end" },
  ];

  const rightColumnTabs: MoodTab[] = [
    { value: "ceremonie", label: "Cérémonie & Cocktail" },
    { value: "night", label: "Night & Party" },
    { value: "crush", label: "Crush & Date" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <MoodTabsColumn tabs={leftColumnTabs} />
      <MoodTabsColumn tabs={rightColumnTabs} />
    </div>
  );
};