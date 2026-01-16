import chalk from "chalk";
import { Separator } from "@inquirer/prompts";

export const FRAMEWORK_CHOICES = [
  {
    name: `${chalk.cyan.bold("React")} + ${chalk.magenta.bold("Vite")}`,
    value: "react-vite",
    description:
      "React + Vite starter with TailwindCSS, React Router, TanStack Query, Framer Motion.\n\n" +
      "Includes advanced file-based routing, smart data-fetching & caching, smooth animations, " +
      "and a well-organized, accessible & customizable component system.",
  },
  {
    name: chalk.white("Next.js"),
    value: "nextjs",
    description: chalk.whiteBright(
      "Modern Next.js starter with TailwindCSS, NextAuth.js, Prisma + PostgreSQL.\n\n" +
        "Comes with full authentication flow, type-safe database access, server & client components, " +
        "and a clean, performant, responsive foundation ready for production."
    ),
  },
  new Separator(),
  {
    name: chalk.greenBright("Vue.js"),
    value: "vue-vite",
    description: chalk.greenBright(
      "Vue 3 + Vite starter template with Vue Router.\n\n" +
        "Ready for fast development with ESLint + Prettier, full TypeScript support (Volar + vue-tsc), " +
        "modern composition API patterns, and excellent Node 20+ compatibility."
    ),
  },
  new Separator(),
  {
    name: chalk.redBright("Angular"),
    value: "angular",
    description: chalk.redBright(
      "Modern Angular starter generated with Angular CLI.\n\n" +
        "Pre-configured with best practices, lazy-loading support, " +
        "standalone components, signals & modern RxJS patterns — ready for " +
        "building large-scale, maintainable enterprise applications."
    ),
  },
];

export const NEEDS_LANGUAGE = ["react-vite", "vue-vite"];

export const LANGUAGE_CHOICES = [
  { name: chalk.yellow.bold("JavaScript"), value: "-js" },
  { name: chalk.blue.bold("TypeScript"), value: "-ts" },
];
