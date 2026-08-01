import { cn, useNavigateAndScroll } from "../../lib/common";

interface MoiraTextProps {
  className?: string;
}

export function MoiraText({ className = "" }: MoiraTextProps) {
  const navscroll = useNavigateAndScroll();
  return (
    <div className="flex cursor-pointer" onClick={() => navscroll("/")}>
      <span className={cn([className])}>Moira</span>
    </div>
  );
}
