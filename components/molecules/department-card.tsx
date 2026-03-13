import { Card, CardContent } from "@/components/ui/card";
import { getIconComponent } from "@/lib/utils";

interface DepartmentCardProps {
    id: string;
    name: string;
    iconName: string;
}
 
export default function DepartmentCard({name,iconName}:DepartmentCardProps) {
    const IconComponent = getIconComponent(iconName);
    const displayName = name || "Unknown Department";

  return (
    <Card className="w-full bg-background border border-border-2 shadow-md rounded-lg p-0">
      <CardContent className="flex flex-col items-center gap-4 p-6 flex-grow">
        <IconComponent className="h-8 w-8 stroke-primary fill-primary" />
        <h3 className="text-text-title text-center truncate w-full">{displayName}</h3>
      </CardContent>
    </Card>
  );
};
