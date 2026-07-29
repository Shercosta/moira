import { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { constructWhatsappChatAndOpen, idNavigator } from "../../lib/common";
import { MoiraText } from "./Moira-Text";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full relative mb-10">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <MoiraText className="text-xl" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant={"none"} className="font-normal">
            Home
          </Button>
          <Button variant={"none"} className="font-normal">
            About Us
          </Button>
          <Button variant={"none"} className="font-normal">
            Services
          </Button>
          <Button variant={"none"} className="font-normal">
            FAQ
          </Button>
        </div>

        <div>
          <Button
            variant={"secondary"}
            onClick={() => {
              constructWhatsappChatAndOpen({});
            }}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full mt-4 md:hidden bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/20 transition-all duration-300 z-50">
          <div className="flex flex-col gap-2">
            <Button
              variant={"none"}
              className="text-white/80 justify-start hover:text-white"
              onClick={() => idNavigator("destination")}
            >
              Destinasi
            </Button>
            <Button
              variant={"none"}
              className="text-white/80 justify-start hover:text-white"
              onClick={() => idNavigator("footer")}
            >
              Kontak
            </Button>
            <Button
              variant={"secondary"}
              onClick={() => {
                constructWhatsappChatAndOpen({});
              }}
            >
              Pesan Sekarang
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
