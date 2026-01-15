import fs from "node:fs";
import ora from "ora";
import _7z from "7zip-min";

import { join } from "node:path";

import { CONFIG } from "./constants.js";
import { clearConsole, contentBox, successMSG } from "./console.js";
import { successLog, highlightLog, infoLog } from "./log.js";
import { updatePackageJson } from "./package-json.js";

export async function generateProject(template, projectName, projectVersion) {
  const msg = `Creating project ${highlightLog(
    projectName
  )} using template ${infoLog(template)}...\n`;
  const spinner = ora(msg).start();

  const source = join(CONFIG.templatesDir, template);
  const destination = join(process.cwd(), projectName);

  try {
    await unzip(source, destination);
    await updatePackageJson(destination, projectName, projectVersion);

    spinner.succeed("Project created successfully!");

    clearConsole();
    contentBox(successLog("Project Created successfully", true));
    await successMSG(projectName, template);
  } catch (err) {
    spinner.fail("Error creating project");
    clearConsole();
    contentBox(
      highlightLog(
        "Something bad happend here is the error msg :\n\n\n" + err,
        true
      )
    );
  }
}

/**
 * Descomprime una plantilla .7z en una carpeta destino
 * y devuelve la ruta del proyecto creado.
 */
async function unzip(source, destination) {
  // Validar que la plantilla existe
  if (!fs.existsSync(source))
    throw new Error(`La plantilla no existe: ${source}`);

  if (fs.existsSync(destination))
    throw new Error(`La carpeta destino ya existe: ${destination}`);

  return new Promise((resolve, reject) => {
    _7z.unpack(source, destination, (err, result) => {
      if (err) reject(err);
      else resolve(result); // devolvemos la ruta del proyecto
    });
  });
}
