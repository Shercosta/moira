import { cn } from "../../lib/common";

interface MoiraTextProps {
  className?: string;
}

export function MoiraText({ className = "" }: MoiraTextProps) {
  return (
    <div className="flex">
      <span className={cn([className])}>Moira</span>
    </div>
  );
}
