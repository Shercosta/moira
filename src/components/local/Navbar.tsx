import { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  constructWhatsappChatAndOpen,
  useBetterNavigate,
} from "../../lib/common";
import { MoiraText } from "./Moira-Text";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa6";

export const navItems = [
  { label: "Home", id: null, route: "/", isNavbar: true },
  { label: "Services", id: null, route: "/services", isNavbar: true },
  { label: "Contact", id: "contactUs", route: "/", isNavbar: true },
  // { label: "About", id: null, route: "/team", isNavbar: true },
  { label: "FAQ", id: "faq", route: "/", isNavbar: true },
  { label: "Our Team", id: null, route: "/team", isNavbar: false },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useBetterNavigate();

  return (
    <nav className={cn(["w-full mb-10", "fixed top-0 bg-white z-50"])}>
      {/* Top bar */}
      <div className="flex items-center justify-between mx-8 my-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <MoiraText className="text-3xl font-bold tracking-tight text-primary transition-all duration-300 hover:scale-105 hover:text-secondary" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-2 md:w-120 justify-between">
          {navItems
            .filter((n) => n.isNavbar)
            .map((item) => (
              <Button
                variant={"none"}
                className="font-normal btn-joe"
                key={item.id}
                onClick={() => navigate(item.route, item.id)}
              >
                {item.label}
              </Button>
            ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            variant={"default"}
            className="rounded-full font-thin px-5"
            onClick={() => {
              constructWhatsappChatAndOpen({});
            }}
          >
            <FaWhatsapp />
            <span>Say Hi</span>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute top-full left-0 w-full mt-4 md:hidden bg-subtle-light p-4 rounded-xl z-50",
          "transition-all duration-300 ease-in-out",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Button
              variant="none"
              className="font-normal"
              key={item.id}
              onClick={() => {
                navigate(item.route, item.id);
                setOpen(false);
              }}
            >
              {item.label}
            </Button>
          ))}

          <Button
            variant="secondary"
            className="text-text-light font-thin"
            onClick={() => {
              constructWhatsappChatAndOpen({});
              setOpen(false);
            }}
          >
            <FaWhatsapp />
            <span>Say Hi</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
