// chalk: colorea texto en la terminal. Ideal para resaltar mensajes.
import chalk from "chalk";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Separator } from "@inquirer/prompts";

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const BOXEN_CONFIG = {
  padding: 1,
  margin: 1,
  borderStyle: "double", //double round
  borderColor: "cyan", //cyan green
  title: "MFOG",
  titleAlignment: "center",
  textAlignment: "center", // 'left' | 'right' | 'center';
};

export const CONFIG = {
  templatesDir: join(__dirname, "../../..", "templates"),
  appName: "MFOG",
  version: "1.0.0",
};

export const FRAMEWORK_CHOICES = [
  {
    name: `${chalk.cyan.bold("React")} + ${chalk.magenta.bold("Vite")}`,
    value: "react-vite",
    description:
      "Plantilla React + Vite con TailwindCSS, React Router, React Query, Framer Motion.\n\nIncluye routing avanzado, gestión de datos con caché inteligente, animaciones fluidas y un sistema de componentes accesibles y personalizables.",
  },
  {
    name: chalk.white("Next.js"),
    value: "nextjs",
    description: chalk.whiteBright(
      "Plantilla Next.js con TailwindCSS, NextAuth.js, Prisma y PostgreSQL.\n\nIncluye autenticación completa, gestión de base de datos con ORM, y un diseño responsivo y moderno."
    ),
  },
  new Separator(),
  {
    name: chalk.greenBright("Vue.js"),
    value: "vue-vite",
    description: chalk.greenBright(
      "Plantilla Vue 3 + Vite con Vue Router.\n\nIncluye configuración lista para desarrollo rápido, linting con ESLint y formateo con Prettier, tipado estático con Vue TSC, y compatibilidad con Node 20+. Ideal para construir aplicaciones SPA modernas y mantenibles."
    ),
  },
  new Separator(),
  {
    name: chalk.redBright("Angular"),
    value: "angular",
    description: chalk.redBright(
      "Plantilla Angular con Angular CLI, configurada para desarrollo rápido y eficiente.\n\nIncluye herramientas esenciales para construir aplicaciones web robustas y escalables con buenas prácticas integradas."
    ),
  },
];

export const NEEDS_LANGUAGE = ["react-vite", "vue-vite"];

export const LANGUAGE_CHOICES = [
  { name: chalk.yellow.bold("JavaScript"), value: "-js" },
  { name: chalk.blue.bold("TypeScript"), value: "-ts" },
];
