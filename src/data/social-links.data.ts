import GitHubIcon from "@/components/icons/GitHubIcon.astro";
import GmailIcon from "@/components/icons/GmailIcon.astro";
import LinkedInIcon from "@/components/icons/LinkedInIcon.astro";
import type { LinkItem } from "@/interfaces/LinkItem.interface";

export const socialLinks: LinkItem[] = [
  {
    href: "https://github.com/manutatum",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/manuel-jiménez-bravo-4b20262a5",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=jbmanuel16@gmail.com",
    label: "Gmail",
    icon: GmailIcon,
  }
];