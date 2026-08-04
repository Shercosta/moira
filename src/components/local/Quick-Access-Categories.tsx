import {
  BrainCircuit,
  Bug,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Globe,
  Lightbulb,
  MonitorCog,
  Palette,
  RefreshCcw,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
  Wrench,
} from "lucide-react";
import { Button } from "../ui/button";
import type { JSX } from "react";
import { useBetterNavigate } from "@/lib/common";

export interface QACProps {
  icon?: JSX.Element;
  h4: string;
  p: string;
  isQuickAccess: boolean;
}

const qacs: QACProps[] = [
  {
    icon: <Code2 size={20} />,
    h4: "Custom Software",
    p: "We build scalable web, mobile, and enterprise applications designed specifically for your business objectives.",
    isQuickAccess: true,
  },
  {
    icon: <Lightbulb size={20} />,
    h4: "IT Consulting",
    p: "Work with experienced professionals to plan, architect, and execute successful technology projects.",
    isQuickAccess: true,
  },
  {
    icon: <CloudCog size={20} />,
    h4: "Cloud & Infrastructure",
    p: "Deploy secure, scalable solutions using modern cloud platforms and infrastructure best practices.",
    isQuickAccess: true,
  },
  {
    icon: <Wrench size={20} />,
    h4: "Support & Optimization",
    p: "Receive continuous maintenance, performance improvements, monitoring, and technical assistance.",
    isQuickAccess: true,
  },
  {
    icon: <Globe size={20} />,
    h4: "Website Development",
    p: "Create responsive, high-performance websites tailored to showcase your brand and achieve your business goals.",
    isQuickAccess: false,
  },
  {
    icon: <Smartphone size={20} />,
    h4: "Mobile App Development",
    p: "Build intuitive Android and iOS applications with modern technologies for a seamless user experience.",
    isQuickAccess: false,
  },
  {
    icon: <MonitorCog size={20} />,
    h4: "Web Application Development",
    p: "Develop secure, scalable web applications with custom features designed around your workflow.",
    isQuickAccess: false,
  },
  {
    icon: <Database size={20} />,
    h4: "Database Design",
    p: "Design reliable and efficient database structures that support performance, scalability, and data integrity.",
    isQuickAccess: false,
  },
  {
    icon: <Workflow size={20} />,
    h4: "Business Process Automation",
    p: "Automate repetitive tasks and streamline business operations with custom software solutions.",
    isQuickAccess: false,
  },
  {
    icon: <Server size={20} />,
    h4: "Backend Development",
    p: "Develop robust APIs, authentication systems, and server-side architectures that power modern applications.",
    isQuickAccess: false,
  },
  {
    icon: <Palette size={20} />,
    h4: "UI/UX Design",
    p: "Design clean, user-centered interfaces that improve usability and create engaging digital experiences.",
    isQuickAccess: false,
  },
  {
    icon: <ShieldCheck size={20} />,
    h4: "Security & Performance",
    p: "Improve application security, optimize performance, and ensure your software follows industry best practices.",
    isQuickAccess: false,
  },
  {
    icon: <GitBranch size={20} />,
    h4: "System Integration",
    p: "Connect your applications with third-party services, payment gateways, CRMs, ERPs, and other business tools.",
    isQuickAccess: false,
  },
  {
    icon: <RefreshCcw size={20} />,
    h4: "Legacy System Modernization",
    p: "Upgrade existing software with modern technologies while preserving critical business functionality.",
    isQuickAccess: false,
  },
  {
    icon: <Bug size={20} />,
    h4: "Maintenance & Bug Fixes",
    p: "Keep your software stable with regular updates, bug fixes, and ongoing technical support.",
    isQuickAccess: false,
  },
  {
    icon: <BrainCircuit size={20} />,
    h4: "AI Integration",
    p: "Integrate AI features such as chatbots, document processing, recommendations, and workflow automation into your applications.",
    isQuickAccess: false,
  },
];

function QuickAccessBox(props: QACProps) {
  const navigate = useBetterNavigate();
  return (
    <div className="w-full rounded-xl bg-white p-5 shadow-sm">
      {props.icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
          {props.icon}
        </div>
      )}

      <h4 className="mt-4 text-lg font-medium">{props.h4}</h4>

      <p className="mt-2 text-sm text-muted-foreground">{props.p}</p>

      <Button
        className="mt-5 rounded-full px-6 font-thin"
        onClick={() => navigate("/services")}
      >
        Explore Our Service
      </Button>
    </div>
  );
}

export function QuickAccessCategories() {
  return (
    <section
      id="quickAccessCategories"
      className="bg-subtle-dark-adaptable px-5 py-12 md:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-thin text-muted">
          [ Quick Access Categories ]
        </h2>

        <h3 className="mt-2 text-center text-3xl text-text-light md:text-4xl">
          Find What You Need Faster
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {qacs
            .filter((qac) => qac.isQuickAccess)
            .map((qac, qacX) => (
              <QuickAccessBox key={qacX} {...qac} />
            ))}
        </div>
      </div>
    </section>
  );
}
