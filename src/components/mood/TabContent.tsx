import { Card, CardContent } from "@/components/ui/card";

interface TabContentProps {
  title: string;
  description: string;
}

export const TabContent = ({ title, description }: TabContentProps) => (
  <Card>
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </CardContent>
  </Card>
);