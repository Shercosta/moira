import { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { constructWhatsappChatAndOpen, idNavigator } from "../../lib/common";
import { MoiraText } from "./Moira-Text";

export const navItems = [
  { label: "Home", id: "hero" },
  // { label: "About Us", id: "team" },
  { label: "Services", id: "quickAccessCategories" },
  { label: "Contact Us", id: "contactUs" },
  { label: "FAQ", id: "faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full relative mb-10">
      {/* Top bar */}
      <div className="flex items-center justify-between mx-8 my-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <MoiraText className="text-3xl font-bold tracking-tight text-primary transition-all duration-300 hover:scale-105 hover:text-secondary" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-2 md:w-120 justify-between">
          {navItems.map((item) => (
            <Button
              variant={"none"}
              className="font-normal btn-joe"
              key={item.id}
              onClick={() => idNavigator(item.id)}
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
            Contact Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full mt-4 md:hidden bg-background p-4 rounded-xl transition-all duration-300 z-50">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                variant={"none"}
                className="font-normal"
                key={item.id}
                onClick={() => idNavigator(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button variant={"secondary"} className="text-text-light font-thin">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
