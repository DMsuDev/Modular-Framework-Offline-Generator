import fs from "node:fs";
import ora from "ora";
import _7z from "7zip-min";

import { join } from "node:path";

import { CONFIG } from "../cli/config/constants.js";
import { contentBox, showSuccessInstructions } from "../cli/banner.js";
import { clearConsole } from "../cli/console.js";
import { success, highlight, info } from "../cli/config/log.js";
import { updatePackageFiles } from "./replacer.js";
import { extractTemplate } from "./extractor.js";

export async function generateProject(template, projectName, projectVersion) {
  const msg = `Creating project ${highlight(
    projectName
  )} using template ${info(template)}...\n`;
  const spinner = ora(msg).start();

  const source = join(CONFIG.templatesDir, template);
  const destination = join(process.cwd(), projectName);

  try {
    await extractTemplate(source, destination);
    await updatePackageFiles(destination, projectName, projectVersion);

    spinner.succeed("Project created successfully!");

    clearConsole();
    contentBox(success("Project Created successfully", true));
    await showSuccessInstructions(projectName, template);
  } catch (err) {
    spinner.fail("Error creating project");
    clearConsole();
    contentBox(
      highlight(
        "Something bad happend here is the error msg :\n\n\n" + err,
        true
      )
    );
  }
}