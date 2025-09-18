import type { ImageMetadata } from "astro";

export interface Project {
  title: string;
  description: string;
  image?: ImageMetadata;
  url: string;
  technologies: string[];
}