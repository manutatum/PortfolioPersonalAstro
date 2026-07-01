import AspIcon from "@/components/icons/carousel/backend/AspIcon.astro";
import JavaIcon from "@/components/icons/carousel/backend/JavaIcon.astro";
import PhpIcon from "@/components/icons/carousel/backend/PhpIcon.astro";
import PythonIcon from "@/components/icons/carousel/backend/PythonIcon.astro";
import SpringBootIcon from "@/components/icons/carousel/backend/SpringBootIcon.astro";
import MongoDbIcon from "@/components/icons/carousel/database/MongoDbIcon.astro";
import MySqlcon from "@/components/icons/carousel/database/MySqlcon.astro";
import PostgreSqlIcon from "@/components/icons/carousel/database/PostgreSqlIcon.astro";
import SqliteIcon from "@/components/icons/carousel/database/SqliteIcon.astro";
import SqlServerIcon from "@/components/icons/carousel/database/SqlServerIcon.astro";
import AngularIcon from "@/components/icons/carousel/frontend/AngularIcon.astro";
import AstroIcon from "@/components/icons/carousel/frontend/AstroIcon.astro";
import BootStrapIcon from "@/components/icons/carousel/frontend/BootStrapIcon.astro";
import JavaScriptIcon from "@/components/icons/carousel/frontend/JavaScriptIcon.astro";
import NextJsIcon from "@/components/icons/carousel/frontend/NextJsIcon.astro";
import ReactIcon from "@/components/icons/carousel/frontend/ReactIcon.astro";
import TailwindIcon from "@/components/icons/carousel/frontend/TailwindIcon.astro";
import TypeScriptIcon from "@/components/icons/carousel/frontend/TypeScriptIcon.astro";
import GitIcon from "@/components/icons/carousel/utils/GitIcon.astro";
import IntelliJIdeaIcon from "@/components/icons/carousel/utils/IntelliJIdeaIcon.astro";
import PostmanIcon from "@/components/icons/carousel/utils/PostmanIcon.astro";
import VsCodeIcon from "@/components/icons/carousel/utils/VsCodeIcon.astro";
import VsIcon from "@/components/icons/carousel/utils/VsIcon.astro";
import GitHubIcon from "@/components/icons/GitHubIcon.astro";
import type { StackItem } from "@/interfaces/StackItem.interface";

export const frontendStack: StackItem[] = [
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    title: "Angular",
    icon: AngularIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Astro",
    icon: AstroIcon,
  },
  {
    title: "Next.js",
    icon: NextJsIcon,
  },
  {
    title: "Tailwind",
    icon: TailwindIcon,
  },
  {
    title: "Bootstrap",
    icon: BootStrapIcon,
  },
];

export const backendStack: StackItem[] = [
  {
    title: "Java",
    icon: JavaIcon,
  },
  {
    title: "PHP",
    icon: PhpIcon,
  },
  {
    title: "Python",
    icon: PythonIcon,
  },
  {
    title: "Spring Boot",
    icon: SpringBootIcon,
  },
  {
    title: "Next.js",
    icon: NextJsIcon,
  },
  {
    title: "ASP.NET",
    icon: AspIcon,
  },
];

export const databaseStack: StackItem[] = [
  {
    title: "MySQL",
    icon: MySqlcon,
  },
  {
    title: "PostgreSQL",
    icon: PostgreSqlIcon,
  },
  {
    title: "MongoDB",
    icon: MongoDbIcon,
  },
  {
    title: "SQL Server",
    icon: SqlServerIcon,
  },
  {
    title: "SQLite",
    icon: SqliteIcon,
  },
];

export const utilsStack: StackItem[] = [
  {
    title: "Git",
    icon: GitIcon,
  },
  {
    title: "GitHub",
    icon: GitHubIcon,
  },
  {
    title: "VS Code",
    icon: VsCodeIcon,
  },
  {
    title: "Visual Studio",
    icon: VsIcon,
  },
  {
    title: "Postman",
    icon: PostmanIcon,
  },
  {
    title: "IntelliJ IDEA",
    icon: IntelliJIdeaIcon,
  },
];