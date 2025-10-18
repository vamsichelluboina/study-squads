import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  verified?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

const SkillBadge = ({ skill, verified, selected, onClick }: SkillBadgeProps) => {
  return (
    <Badge
      variant={selected ? "default" : "secondary"}
      className={cn(
        "cursor-pointer transition-all hover:scale-105",
        onClick && "hover:shadow-md",
        selected && "shadow-md"
      )}
      onClick={onClick}
    >
      {skill}
      {verified && <CheckCircle2 className="ml-1 h-3 w-3 text-accent" />}
    </Badge>
  );
};

export default SkillBadge;
