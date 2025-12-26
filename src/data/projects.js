import {
  ExternalLink,
  Github,
  Layers,
  Zap,
  Server,
  Database,
  Lock,
} from "lucide-react";

export const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured shopping platform with cart functionality, payment processing, and admin dashboard.",
    fullDescription:
      "A scalable, microservices-based e-commerce platform designed to handle high-traffic sales events. Features include real-time inventory management, secure Stripe payment integration, and a comprehensive admin dashboard for analytics and order management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&q=80",
    github: "#",
    live: "#",
    features: [
      "Real-time inventory tracking with Redis caching",
      "Secure payment processing via Stripe Webhooks",
      "Role-based access control (RBAC) for admins/users",
      "Order tracking and history management",
      "Responsive design with dark mode support",
    ],
    challenges: [
      {
        icon: Zap,
        title: "High Concurrency",
        desc: "Handling multiple users purchasing the same item simultaneously.",
      },
      {
        icon: Lock,
        title: "Security",
        desc: "Ensuring PCI DSS compliance and secure data transmission.",
      },
      {
        icon: Database,
        title: "Data Consistency",
        desc: "Keeping inventory in sync across distributed services.",
      },
    ],
    solutions: [
      {
        icon: Server,
        title: "Redis Locking",
        desc: "Implemented distributed locking to prevent race conditions.",
      },
      {
        icon: Layers,
        title: "Microservices",
        desc: "Decoupled auth, order, and inventory services for scalability.",
      },
      {
        icon: Database,
        title: "Atomic Transactions",
        desc: "Used MongoDB transactions to ensure data integrity.",
      },
    ],
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates and team workspace features.",
    fullDescription:
      "A real-time collaboration tool enabling teams to organize tasks, track progress, and communicate seamlessly. Built with performance and usability in mind.",
    tags: ["Vue.js", "Firebase", "Tailwind", "Pinia"],
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?fit=crop&w=800&q=80",
    github: "#",
    live: "#",
    features: [
      "Real-time updates using Firebase Firestore",
      "Drag-and-drop kanban board",
      "Team spaces and member filtering",
      "Rich text editing for task descriptions",
    ],
    challenges: [],
    solutions: [],
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Data visualization platform processing large datasets and presenting actionable insights.",
    fullDescription:
      "A powerful analytics dashboard capable of ingesting and visualizing millions of data points. optimized for rendering performance using D3.js and virtualized tables.",
    tags: ["React", "D3.js", "Python", "AWS"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80",
    github: "#",
    live: "#",
    features: [
      "Interactive data visualization charts",
      "Customizable report generation",
      "Real-time data streaming",
      "Export to PDF/CSV",
    ],
    challenges: [],
    solutions: [],
  },
];
