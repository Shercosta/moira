import { useState } from "react";
import { cn, useNavigateAndScroll } from "../../lib/common";

interface MoiraTextProps {
  className?: string;
}

export function MoiraText({ className = "" }: MoiraTextProps) {
  const navscroll = useNavigateAndScroll();
  const [rotation, setRotation] = useState(0);

  return (
    <div
      className={cn("inline-flex cursor-pointer items-center gap-2", className)}
      onClick={() => navscroll("/")}
      onMouseEnter={() => setRotation((prev) => prev + 180)}
      onMouseLeave={() => setRotation((prev) => prev + 180)}
    >
      <img
        src="/moiraicon.png"
        alt="Moira"
        className="h-[1em] w-[1em] object-contain transition-transform duration-500"
        style={{ transform: `rotate(${rotation}deg)` }}
      />

      <span>Moira</span>
    </div>
  );
}
