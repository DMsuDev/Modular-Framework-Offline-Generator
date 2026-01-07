// inquirer: crea interfaces de línea de comandos (CLI) con argumentos y flags.
import { select, input } from '@inquirer/prompts';
import { validateProjectName } from "./utils.js"

export const askSelection = (message, choices) =>
  select({ message, choices });

export const askInput = (message, def = "my-app") =>
  input({ message, default: def, validate: validateProjectName });