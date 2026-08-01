// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";
import { MoiraText } from "./Moira-Text";
import { navItems } from "./Navbar";
import { idNavigator } from "@/lib/common";

export function Footer() {
  return (
    <footer id="footer" className="bg-subtle-light px-5 py-12 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <MoiraText className="text-5xl font-bold tracking-tight text-primary transition-all duration-300 hover:scale-105 hover:text-secondary" />

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Your technology partner for custom software development, system
            integration, and digital transformation tailored to your business.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-4 font-semibold text-primary">Navigation</h3>

          <ul className="space-y-3 text-sm text-muted-foreground">
            {navItems.map((navitem) => (
              <li key={navitem.id}>
                <a
                  onClick={() => idNavigator(navitem.id)}
                  className="hover:text-primary cursor-pointer"
                >
                  {navitem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-semibold text-primary">Contact</h3>

          <div className="space-y-4 text-sm text-muted-foreground">
            <a
              href="tel:+6281296370073"
              className="flex items-center gap-3 hover:text-primary"
            >
              <Phone size={18} />
              +62 812-9637-0073
            </a>

            <a
              href="mailto:shercostagp+moira@gmail.com"
              className="flex items-center gap-3 hover:text-primary"
            >
              <Mail size={18} />
              shercostagp+moira@gmail.com
            </a>
          </div>
        </div>

        {/* Social */}
        {/* <div>
          <h3 className="mb-4 font-semibold text-primary">Follow Us</h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="rounded-full bg-primary/10 p-3 text-primary transition hover:bg-primary hover:text-white"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-primary/10 p-3 text-primary transition hover:bg-primary hover:text-white"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-primary/10 p-3 text-primary transition hover:bg-primary hover:text-white"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Stay connected and follow our latest updates.
          </p>
        </div> */}
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-primary/10 pt-6 text-center text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Moira. All rights reserved.</p>

        <p>Turning ideas into reliable digital solutions.</p>
      </div>
    </footer>
  );
}
