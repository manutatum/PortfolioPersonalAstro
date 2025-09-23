import BrainIcon from "@/components/icons/navbar/BrainIcon.astro";
import ContactIcon from "@/components/icons/navbar/ContactIcon.astro";
import HomeIcon from "@/components/icons/navbar/HomeIcon.astro";
import ProjectIcon from "@/components/icons/navbar/ProjectIcon.astro";

import type { LinkItem } from "@/interfaces/LinkItem.interface";

export const navbarItems: LinkItem[] = [
  {
    href: "#home",
    label: "Inicio",
    icon: HomeIcon,
  },
  {
    href: "#brain",
    label: "Formación",
    icon: BrainIcon,
  },
  {
    href: "#projects",
    label: "Proyectos",
    icon: ProjectIcon,
  },
  {
    href: "#contact",
    label: "Contactos",
    icon: ContactIcon,
  },
];