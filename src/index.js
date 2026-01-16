#!/usr/bin/env node

import { askSelection, askInput } from "./cli/prompts.js";
import { generateProject } from "./core/generator.js";
import { contentBox, banner, showSuccessInstructions } from "./cli/banner.js";
import { clearConsole, waitTime } from "./cli/console.js";
import {
  FRAMEWORK_CHOICES,
  LANGUAGE_CHOICES,
  NEEDS_LANGUAGE,
} from "./cli/config/constants.js";
import { highlight, success, error } from "./cli/config/log.js";

let msg = `${highlight("Modular Framework Offline Generator")}

Thank you for using MFOG, created by MDsuDev.`;

async function main() {
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

  await generateProject({ name, version, framework, language });

  clearConsole();

  contentBox(success("Project Created successfully", true));

  await showSuccessInstructions(name, framework + (language || ""));
}

main().catch((err) => {
  console.error("Error:", error(err.message));
  process.exit(1);
});
