import fs from "node:fs";
import ora from "ora";
import _7z from "7zip-min";

import { join } from "node:path";

import { CONFIG } from "./constants.js";
import { clearConsole, contentBox, successMSG } from "./console.js";
import { successLog, highlightLog, infoLog } from "./log.js";

export async function generateProject(template, projectName) {
  const msg = `Creando proyecto ${highlightLog(projectName)} usando plantilla ${infoLog(template)}...\n`
  const spinner = ora(msg).start();

  try {
      const projectPath = await unzip(template, projectName);
      await updatePackageName(projectPath, projectName);

      spinner.succeed("Project created successfully!");
      
      clearConsole()
      contentBox(successLog('Project Created successfully', true));
      await successMSG(projectName);

  } catch (err) {
      spinner.fail("Error creating project");
      clearConsole()
      contentBox(highlightLog('Something bad happend here is the error msg :\n\n\n' + err, true));
  }
}

/**
 * Descomprime una plantilla .7z en una carpeta destino
 * y devuelve la ruta del proyecto creado.
 */
async function unzip(template, folder) {
  const src = join(CONFIG.templatesDir, template);
  const dest = join(process.cwd(), folder)

  // Validar que la plantilla existe
  if (!fs.existsSync(src)) throw new Error(`La plantilla no existe: ${src}`);
  // Evitar sobrescribir proyectos existentes
  if (fs.existsSync(dest)) throw new Error(`La carpeta destino ya existe: ${dest}`);

  return new Promise((resolve, reject) => {
    _7z.unpack(src, dest, (err, result) => {
      if (err) reject(err);
      else resolve(result); // devolvemos la ruta del proyecto
    });
  });
}

/**
 * Cambia el campo "name" del package.json
 */
async function updatePackageName(projectPath, projectName) {
  const pkgPath = join(projectPath, "package.json");

  // La plantilla puede no tener package.json (por ejemplo plantillas vacías)
  if (!fs.existsSync(pkgPath)) return; 

  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg.name = projectName;

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}
