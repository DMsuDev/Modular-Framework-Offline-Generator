// chalk: colorea texto en la terminal. Ideal para resaltar mensajes.
import chalk from "chalk";

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Separator } from '@inquirer/prompts';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const BOXEN_CONFIG = {
  padding: 1,
  margin: 1,
  borderStyle: "double", //double round
  borderColor: "cyan", //cyan green
  title: "MFOG",
  titleAlignment: "center",
  textAlignment: 'center' // 'left' | 'right' | 'center';
}

export const CONFIG = {
  templatesDir: join(__dirname, "..", "templates"),
  appName: "MFOG",
  version: "1.0.0"
};

export const FRAMEWORK_CHOICES = [
  { name: `${chalk.cyan.bold("React")} + ${chalk.magenta.bold("Vite")}`, value: "react-vite", description: "Plantilla React + Vite con TailwindCSS, React Router, React Query, Framer Motion.\n\nIncluye routing avanzado, gestión de datos con caché inteligente, animaciones fluidas y un sistema de componentes accesibles y personalizables." },
  new Separator(),
  { name: chalk.white("Next.js"), value: "nextjs" }
];

export const NEEDS_LANGUAGE = ["react-vite"]

export const LANGUAGE_CHOICES = [
  {name: chalk.yellow.bold("JavaScript"), value: "-js"},
  {name: chalk.blue.bold("TypeScript"), value: "-ts"},
]