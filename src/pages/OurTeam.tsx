import { Button } from "@/components/ui/button";
import { useBetterNavigate } from "@/lib/common";
import { CheckCircle2 } from "lucide-react";

const industries = [
  "Banking & Finance",
  "Government",
  "Healthcare",
  "Enterprise",
  "Education",
  "Manufacturing",
  "E-Commerce",
  "AI Platforms",
];

const capabilities = [
  {
    title: "Frontend Engineering",
    items: ["React", "Next.js", "Vue", "TypeScript", "Responsive UI"],
  },
  {
    title: "Backend Engineering",
    items: ["Node.js", "Laravel", "Go", "REST APIs", "Authentication"],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "Docker",
      "CI/CD",
      "Redis",
      "Microservices",
      "Performance Optimization",
    ],
  },
  {
    title: "Mobile Development",
    items: ["Flutter", "React Native", "Cross-platform Apps", "Firebase"],
  },
  {
    title: "Database & Architecture",
    items: ["PostgreSQL", "MySQL", "MongoDB", "System Design", "Scalable APIs"],
  },
  {
    title: "Integrations",
    items: [
      "Payment Gateways",
      "OCR",
      "OAuth",
      "Third-party APIs",
      "Enterprise Systems",
    ],
  },
];

const proof = [
  {
    title: "Enterprise Banking",
    description:
      "Customer onboarding, digital banking platforms, internal back-office systems, mortgage services, and Bank-as-a-Service solutions.",
  },
  {
    title: "Government Platforms",
    description:
      "Public reporting systems, investment portals, and enterprise content management solutions.",
  },
  {
    title: "Healthcare Systems",
    description:
      "Clinic management, appointment scheduling, customer portals, and internal healthcare applications.",
  },
  {
    title: "Enterprise Solutions",
    description:
      "ERP systems, workflow automation, inventory management, CMS platforms, and internal business tools.",
  },
];

const partnerLogos = [
  {
    name: "Bank Tabungan Negara",
    logo: "https://www.btn.co.id/-/media/Images/About/Logo/logo-btn-1.png?h=4500&w=4500&hash=2087883B32B8E7C63C2AF40022CA1313",
  },
  {
    name: "Mandiri Utama Finance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_Mandiri_Utama_Finance.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  },
  {
    name: "Indonesia Stock Exchange",
    logo: "https://www.idx.co.id/media/jgad3455/logo-bursa-efek-indonesia-final.png?width=312&height=304&mode=max",
  },
  {
    name: "PT Sarana Multi Infrastruktur",
    logo: "https://avpn.asia/wp-content/uploads/2019/11/PT-SMI-Logo-1024x910.png",
  },
  {
    name: "CNN",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg",
  },
  {
    name: "MNC Play",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/MNC_Play_%282019%29.png",
  },
];

export default function OurTeam() {
  const navigate = useBetterNavigate();
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-16 lg:py-20 space-y-28">
      {/* HERO */}

      <section className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          [ Why Our Team ]
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Built by engineers who solve
          <br />
          real business problems.
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-8">
          We aren't just developers proficient in modern frameworks. We're
          engineers who have contributed to enterprise platforms, banking
          systems, healthcare software, AI products, government services, and
          internal business applications. Every project adds experience we bring
          into the next one.
        </p>
      </section>

      {/* INDUSTRIES */}

      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold">
            Collective Industry Experience
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Our combined experience spans multiple industries and business
            domains.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-xl border bg-surface p-6 font-medium"
            >
              {industry}
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-5">
          <div className="mb-6">
            <h3 className="text-xl font-medium">
              Organizations We’ve Worked With
            </h3>

            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Our team has contributed to projects across financial services,
              media, public institutions, and other industries.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="
            group flex h-32 items-center justify-center
            rounded-xl border bg-background p-6
            transition-all duration-300
            hover:-translate-y-1 hover:border-primary/30
            hover:bg-surface hover:shadow-sm
          "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="
              max-h-16 w-full
              object-contain
              grayscale opacity-60
              transition-all duration-300
              group-hover:grayscale-0 group-hover:opacity-100
            "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}

      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold">
            Real Systems We've Helped Build
          </h2>

          <p className="mt-3 text-muted-foreground max-w-2xl">
            Our engineers have contributed to software used by enterprises,
            financial institutions, healthcare providers, government
            organizations, and startups.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {proof.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border p-8 bg-subtle-dark bg-center"
            >
              <h3 className="text-xl font-semibold text-text-light">
                {item.title}
              </h3>

              <p className="mt-4 text-surface leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}

      <section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">Engineering Capabilities</h2>

          <p className="mt-3 text-muted-foreground max-w-2xl">
            We assemble teams with the right combination of expertise depending
            on your project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-xl border p-8 bg-border hover:bg-surface transition-all duration-300"
            >
              <h3 className="mb-6 text-xl font-semibold">{capability.title}</h3>

              <div className="space-y-4">
                {capability.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-primary" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}

      <section className="rounded-3xl border p-10 lg:p-16 bg-primary">
        <h2 className="text-3xl font-semibold text-surface">
          More Than Technical Skills
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-white">
              We understand business.
            </h3>

            <p className="mt-3 text-muted leading-7">
              Every technical decision should support business goals, whether
              that's improving operational efficiency, simplifying workflows, or
              creating better user experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              We build for the long term.
            </h3>

            <p className="mt-3 text-muted leading-7">
              Our focus is maintainable architecture, scalable solutions, and
              clean engineering practices that allow your software to evolve
              alongside your business.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Collaboration comes first.
            </h3>

            <p className="mt-3 text-muted leading-7">
              We work closely with clients, designers, and stakeholders to
              ensure every feature solves a real problem—not just a technical
              one.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Quality is part of development.
            </h3>

            <p className="mt-3 text-muted leading-7">
              Testing, code reviews, performance, security, and maintainability
              are integrated into our engineering process from day one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="text-center py-10">
        <h2 className="text-4xl font-bold">
          Let's build your next software project.
        </h2>

        <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
          Whether you're starting from scratch or improving an existing system,
          our engineering team is ready to help turn your ideas into reliable
          software.
        </p>

        {/* Button goes here */}
        <div className="flex justify-center gap-x-5">
          <Button
            size="lg"
            className="rounded-full px-6 font-thin md:px-5 mt-5"
            onClick={() => navigate("/", "contactUs")}
          >
            Contact Us
          </Button>
          <Button
            variant={"outline"}
            size="lg"
            className="rounded-full px-6 font-thin md:px-5 mt-5"
            onClick={() => navigate("/services")}
          >
            See Services
          </Button>
        </div>
      </section>
    </main>
  );
}
