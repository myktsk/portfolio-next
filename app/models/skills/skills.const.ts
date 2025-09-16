import {
  BeakerIcon,
  BriefcaseIcon,
  CircleStackIcon,
  CloudIcon,
  CodeBracketIcon,
  FaceSmileIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ServerIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import type { Skills } from "./skills.types";

export const HARD_SKILLS: Skills[] = [
  {
    name: "Human-Centric UX Design",
    description:
      "Creating intuitive and engaging user experiences by focusing on usability, accessibility, and user behavior.",
    icon: UserIcon,
  },
  {
    name: "Frontend Development",
    description:
      "5+ years: React, Redux, TypeScript, Tailwind CSS \n2+ years: Zustand, Next.js",
    icon: RocketLaunchIcon,
  },
  {
    name: "Backend Development",
    description: "5+ years: Node.js, PHP \n2+ years: Express, Python",
    icon: ServerIcon,
  },
  {
    name: "Data Structure Design",
    description: "5+ years: SQL, Firebase \n2+ years: MongoDB",
    icon: CircleStackIcon,
  },
  {
    name: "Cloud Platforms",
    description: "5+ years: Google Cloud Platform",
    icon: CloudIcon,
  },
  {
    name: "AI Solutions",
    description: "3+ years: OpenAI API",
    icon: LightBulbIcon,
  },
  {
    name: "Testing",
    description: "5+ years: Jest, React Testing Library \n2+ years: Playwright",
    icon: BeakerIcon,
  },
  {
    name: "Clean Code",
    description:
      "Writing maintainable, well-structured, and efficient code that follows best practices and industry standards.",
    icon: CodeBracketIcon,
  },
];

export const SOFT_SKILLS: Skills[] = [
  {
    name: "Great Team Worker",
    description:
      "Collaborative, adaptable, and always ready to contribute—working seamlessly with teams to bring ideas to life.",
    icon: UserGroupIcon,
  },
  {
    name: "Sales & Marketing",
    description:
      "Bringing experience from sales and marketing, understanding both the technical and business side of products.",
    icon: BriefcaseIcon,
  },
  {
    name: "Adaptability",
    description:
      "Thriving in fast-paced environments, quickly learning new technologies, and adjusting to project needs.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Problem-Solving",
    description:
      "Analyzing complex problems, identifying root causes, and developing innovative solutions to overcome challenges.",
    icon: LightBulbIcon,
  },
  {
    name: "Communication",
    description:
      "Expressing ideas clearly and effectively, fostering open communication, and building strong relationships with clients.",
    icon: FaceSmileIcon,
  },
];
