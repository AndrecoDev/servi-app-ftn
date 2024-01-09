import { Badge } from "@/components/ui/badge";

interface IBadgeProps {
  description: string;
}

export function BadgeAtom({ description }: IBadgeProps) {
  return <Badge>{description}</Badge>;
}
