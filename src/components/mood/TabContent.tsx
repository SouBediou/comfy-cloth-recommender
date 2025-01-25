import { Card, CardContent } from "@/components/ui/card";

interface TabContentProps {
  title: string;
  description: string;
}

export const TabContent = ({ title, description }: TabContentProps) => (
  <Card className="mt-12">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-[#D946EF]">{description}</p>
    </CardContent>
  </Card>
);