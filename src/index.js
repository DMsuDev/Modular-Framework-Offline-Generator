#!/usr/bin/env node
// Permite ejecutar este archivo como un comando global en la terminal.

import { askSelection, askInput } from "./cli/prompts.js";
import { generateProject } from "./core/generator.js";
import { contentBox, banner } from "./cli/banner.js";
import { clearConsole, waitTime } from "./cli/console.js";
import {
  FRAMEWORK_CHOICES,
  LANGUAGE_CHOICES,
  NEEDS_LANGUAGE,
} from "./cli/config/constants.js";
import { highlight } from "./cli/config/log.js";

let msg = `${highlight("Modular Framework Offline Generator")}

Thank you for using MFOG, created by MDsuDev.`;

async function run() {
  clearConsole();
  await banner("CREATE APP OFFLINE");
  contentBox(msg);

  await waitTime(100);

  const name = await askInput("Enter the project name:", "my-app");
  const version = await askInput("Enter the project version:", "0.1.0");
  const framework = await askSelection(
    "Choose a framework for your project:",
    FRAMEWORK_CHOICES
  );
  const language = NEEDS_LANGUAGE.includes(framework)
    ? await askSelection(
        "Which language do you want to use?:",
        LANGUAGE_CHOICES
      )
    : "";

  const template = `${framework}${language}.7z`;
  await generateProject(template, name, version);
}

run();
