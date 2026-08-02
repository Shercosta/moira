import { cn, useNavigateAndScroll } from "../../lib/common";

interface MoiraTextProps {
  className?: string;
}

export function MoiraText({ className = "" }: MoiraTextProps) {
  const navscroll = useNavigateAndScroll();

  return (
    <div
      className={cn("inline-flex items-center gap-2 cursor-pointer", className)}
      onClick={() => navscroll("/")}
    >
      <img
        src="/moiraicon.png"
        alt="Moira"
        className="h-[1em] w-[1em] object-contain"
      />

      <span>Moira</span>
    </div>
  );
}
