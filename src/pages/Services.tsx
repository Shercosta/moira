import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { QACProps } from "@/components/local/Quick-Access-Categories";
import { shuffleArray, useBetterNavigate } from "@/lib/common";

interface ProcessStep {
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description:
      "We begin by understanding your business, goals, users, and technical requirements to define a clear project scope.",
  },
  {
    title: "Planning",
    description:
      "Our team designs the solution architecture, selects the right technologies, and creates a practical development roadmap.",
  },
  {
    title: "Development",
    description:
      "Using an iterative approach, we build your solution while keeping you informed through regular progress updates.",
  },
  {
    title: "Testing",
    description:
      "Every feature is thoroughly tested to ensure functionality, security, performance, and a smooth user experience.",
  },
  {
    title: "Deployment",
    description:
      "We deploy your application, assist with the launch, and provide ongoing support to keep your software running reliably.",
  },
];

interface ServiceProps extends QACProps {
  subtitle: string;
  image: string;
  deliverables: string[];
}

const services: ServiceProps[] = [
  {
    h4: "Custom Software",
    subtitle: "Tailored Digital Solutions",
    p: "We build scalable web, mobile, and enterprise applications designed specifically for your business objectives.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/1.webp",
    deliverables: [
      "Custom Business Systems",
      "Enterprise Applications",
      "REST API Development",
      "Technical Documentation",
    ],
    isQuickAccess: true,
  },
  {
    h4: "IT Consulting",
    subtitle: "Technology Strategy & Planning",
    p: "Work with experienced professionals to plan, architect, and execute successful technology projects.",
    image:
      "https://amalgamated.co.id/wp-content/uploads/2024/02/Desk-Workers_AZR5652-Edit.jpeg",
    deliverables: [
      "Solution Architecture",
      "Technology Assessment",
      "Project Planning",
      "Technical Recommendations",
    ],
    isQuickAccess: true,
  },
  {
    h4: "Cloud & Infrastructure",
    subtitle: "Scalable Cloud Solutions",
    p: "Deploy secure, scalable solutions using modern cloud platforms and infrastructure best practices.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/2.webp",
    deliverables: [
      "Cloud Deployment",
      "Infrastructure Setup",
      "CI/CD Pipelines",
      "Monitoring & Logging",
    ],
    isQuickAccess: true,
  },
  {
    h4: "Support & Optimization",
    subtitle: "Continuous Improvement",
    p: "Receive continuous maintenance, performance improvements, monitoring, and technical assistance.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/3.jpg",
    deliverables: [
      "Performance Tuning",
      "System Monitoring",
      "Technical Support",
      "Software Updates",
    ],
    isQuickAccess: true,
  },
  {
    h4: "Website Development",
    subtitle: "Modern Business Websites",
    p: "Create responsive, high-performance websites tailored to showcase your brand and achieve your business goals.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/16.webp",
    deliverables: [
      "Responsive Website",
      "CMS Integration",
      "SEO-Friendly Pages",
      "Deployment Assistance",
    ],
    isQuickAccess: false,
  },
  {
    h4: "Mobile App Development",
    subtitle: "Android & iOS Applications",
    p: "Build intuitive Android and iOS applications with modern technologies for a seamless user experience.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/5.webp",
    deliverables: [
      "Android App",
      "iOS App",
      "Push Notifications",
      "App Store Deployment",
    ],
    isQuickAccess: false,
  },
  {
    h4: "Web Application Development",
    subtitle: "Powerful Web Platforms",
    p: "Develop secure, scalable web applications with custom features designed around your workflow.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/6.webp",
    deliverables: [
      "Custom Dashboard",
      "Authentication System",
      "Role Management",
      "API Integration",
    ],
    isQuickAccess: false,
  },
  {
    h4: "Database Design",
    subtitle: "Reliable Data Architecture",
    p: "Design reliable and efficient database structures that support performance, scalability, and data integrity.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/7.webp",
    deliverables: [
      "Database Schema",
      "Data Modeling",
      "Query Optimization",
      "Migration Planning",
    ],
    isQuickAccess: false,
  },
  {
    h4: "Business Process Automation",
    subtitle: "Smarter Business Workflows",
    p: "Automate repetitive tasks and streamline business operations with custom software solutions.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/8.webp",
    deliverables: [
      "Workflow Automation",
      "Approval Systems",
      "Task Automation",
      "Process Documentation",
    ],
    isQuickAccess: false,
  },
  {
    h4: "Backend Development",
    subtitle: "Scalable Server Solutions",
    p: "Develop robust APIs, authentication systems, and server-side architectures that power modern applications.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/9.webp",
    deliverables: [
      "REST APIs",
      "Authentication",
      "Database Integration",
      "Server Deployment",
    ],
    isQuickAccess: false,
  },
  {
    h4: "UI/UX Design",
    subtitle: "Design That Users Love",
    p: "Design clean, user-centered interfaces that improve usability and create engaging digital experiences.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/10.webp",
    deliverables: [
      "Wireframes",
      "UI Mockups",
      "Interactive Prototypes",
      "Design System",
    ],
    isQuickAccess: false,
  },
  {
    h4: "Security & Performance",
    subtitle: "Reliable & Secure Applications",
    p: "Improve application security, optimize performance, and ensure your software follows industry best practices.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/11.webp",
    deliverables: [
      "Security Audit",
      "Performance Optimization",
      "Load Testing",
      "Best Practice Review",
    ],
    isQuickAccess: false,
  },
  {
    h4: "System Integration",
    subtitle: "Connected Business Systems",
    p: "Connect your applications with third-party services, payment gateways, CRMs, ERPs, and other business tools.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/12.webp",
    deliverables: [
      "Payment Gateway Integration",
      "CRM Integration",
      "ERP Connectivity",
      "Third-Party APIs",
    ],
    isQuickAccess: false,
  },
  {
    h4: "Legacy System Modernization",
    subtitle: "Modernize Existing Software",
    p: "Upgrade existing software with modern technologies while preserving critical business functionality.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/13.webp",
    deliverables: [
      "Code Refactoring",
      "Technology Migration",
      "System Upgrade",
      "Compatibility Testing",
    ],
    isQuickAccess: false,
  },
  {
    h4: "Maintenance & Bug Fixes",
    subtitle: "Keep Software Running Smoothly",
    p: "Keep your software stable with regular updates, bug fixes, and ongoing technical support.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/14.webp",
    deliverables: [
      "Bug Fixes",
      "Version Updates",
      "Health Monitoring",
      "Technical Support",
    ],
    isQuickAccess: false,
  },
  {
    h4: "AI Integration",
    subtitle: "Intelligent Software Features",
    p: "Integrate AI features such as chatbots, document processing, recommendations, and workflow automation into your applications.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/15.webp",
    deliverables: [
      "AI Chatbots",
      "Document Processing",
      "Recommendation Systems",
      "LLM Integration",
    ],
    isQuickAccess: false,
  },
];

export default function ServicesPage() {
  const navigate = useBetterNavigate();

  return (
    <main className="bg-background text-primary">
      {/* Hero */}

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]" />

        <div className="container mx-auto px-6 py-28 text-center relative z-10">
          <p className="text-center text-teal">[ Our Services ]</p>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl text-teal">
            Software Built Around
            <span className="text-primary"> Your Business</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
            We help businesses transform ideas into reliable software solutions
            through modern technologies, thoughtful design, and collaborative
            development.
          </p>

          {/* <Button size="lg" className="mt-10 rounded-full">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button> */}
        </div>
      </section>

      {/* Navigation */}

      {/* <section className="sticky top-16 z-20 border-y border-white/10 bg-[#020617]/90 backdrop-blur">
        <div className="container mx-auto flex gap-3 overflow-auto px-6 py-4">
          {services.map((service) => (
            <button
              key={service.h4}
              className="whitespace-nowrap rounded-full border border-white/10 px-5 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {service.h4}
            </button>
          ))}
        </div>
      </section> */}

      {/* Services */}

      <section className="container mx-auto px-6 py-24 space-y-32">
        {shuffleArray(services).map((service, index) => (
          <div
            key={service.h4}
            className={`grid items-center gap-16 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}

            <div className="overflow-hidden rounded-3xl border border-surface">
              <img
                src={service.image}
                alt={service.h4}
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}

            <div>
              <p className="font-semibold uppercase tracking-widest text-muted">
                {service.subtitle}
              </p>

              <h2 className="mt-3 text-4xl font-bold">{service.h4}</h2>

              <p className="mt-6 leading-8 text-muted">{service.p}</p>

              <div className="mt-10 rounded-3xl bg-surface p-6">
                <h3 className="mb-5 text-xl font-semibold">
                  Typical Deliverables
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* <Button className="mt-8 rounded-full bg-cyan-500 hover:bg-cyan-400">
                Learn More
              </Button> */}
            </div>
          </div>
        ))}
      </section>

      {/* Process */}

      <section className="bg-subtle-dark">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <p className="font-thin text-muted">[ Our Process ]</p>

            <h2 className="mt-4 text-4xl font-bold text-text-light">
              How We Build Software
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <div key={step.title} className="rounded-3xl bg-border p-6">
                <div className="text-4xl font-bold text-teal">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-secondary">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}

      {/* <section className="container mx-auto px-6 py-24">
        <div className="text-center">
          <p className="uppercase tracking-widest text-cyan-400">
            Technologies
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Tools We Love Working With
          </h2>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Next.js",
            "Node.js",
            "Laravel",
            "Flutter",
            "Tailwind CSS",
            "PostgreSQL",
            "MongoDB",
            "Docker",
            "AWS",
            "Azure",
            "Figma",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-white/10 bg-slate-900 px-5 py-3 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {tech}
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}

      <section className="px-6 py-18">
        <div className="container mx-auto rounded-[40px] bg-surface p-16 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Build Something Great?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted leading-8">
            Whether you're starting a new project or improving an existing
            system, we'd love to help turn your ideas into reliable software.
          </p>

          <Button
            size="lg"
            className="rounded-full px-6 font-thin md:px-5"
            onClick={() => navigate("/", "contactUs")}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
}
