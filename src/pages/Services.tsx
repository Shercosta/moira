import type { QACProps } from "@/components/local/Quick-Access-Categories";
import { HeroService } from "@/components/local/Hero-Service";
import { PanelService } from "@/components/local/Panel-Service";
import { Button } from "@/components/ui/button";
import { useBetterNavigate } from "@/lib/common";

interface ProcessStep {
  title: string;
  description: string;
}

// not used
export const processSteps: ProcessStep[] = [
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

export const services: ServiceProps[] = [
  {
    h4: "Custom Software",
    subtitle: "Tailored Digital Solutions",
    p: "We build scalable web, mobile, and enterprise applications designed specifically for your business objectives.",
    image:
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/6.webp",
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
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/10.webp",
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
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/9.webp",
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
      "https://raw.githubusercontent.com/Shercosta/moira/refs/heads/master/public/services/17.webp",
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
    <>
      <HeroService />
      <PanelService />

      <section
        id="cta"
        className="flex flex-col px-6 pb-12 md:px-8 md:pb-10 gap-y-5 my-10"
      >
        <div className="flex w-full justify-center">
          <span className="text-3xl text-center lg:max-w-[50%]">
            Ready to experience the full capability of your business software?
          </span>
        </div>
        <div className="flex w-full justify-center gap-5">
          <Button
            className="rounded-full px-6 font-thin md:px-5 mt-5"
            onClick={() => navigate("/", "contactUs")}
          >
            Contact Us
          </Button>
          <Button
            className="rounded-full px-6 font-thin md:px-5 mt-5"
            variant={"outline"}
            onClick={() => navigate("/team")}
          >
            Check Out Our Team
          </Button>
        </div>
      </section>
    </>
  );
}
