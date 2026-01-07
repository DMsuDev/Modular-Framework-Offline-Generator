#!/usr/bin/env node
// Permite ejecutar este archivo como un comando global en la terminal.

import { askSelection, askInput } from "./src/prompts.js";
import { generateProject } from "./src/generator.js";
import { clearConsole, contentBox, banner } from "./src/console.js";
import {
  FRAMEWORK_CHOICES,
  LANGUAGE_CHOICES,
  NEEDS_LANGUAGE,
} from "./src/constants.js";
import { waitTime } from "./src/utils.js";
import { highlightLog } from "./src/log.js";

let msg = `${highlightLog("Modular Framework Offline Generator")}

Gracias por usar MFOG por MDsuDev.`;

async function run() {
  clearConsole();
  await banner("CREATE APP OFFLINE");
  contentBox(msg);

  await waitTime(100);

  const name = await askInput("Nombre del proyecto:", "my-app");
  const framework = await askSelection(
    "¿Qué tipo de proyecto quieres crear?",
    FRAMEWORK_CHOICES
  );
  const language = NEEDS_LANGUAGE.includes(framework)
    ? await askSelection("¿Qué lenguaje quieres usar?", LANGUAGE_CHOICES)
    : "";

  const template = `${framework}${language}.7z`;
  await generateProject(template, name);
}

run();
