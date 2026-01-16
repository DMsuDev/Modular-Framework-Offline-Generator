// figlet: genera texto ASCII artístico (banners grandes).
import figlet from "figlet";
// boxen: dibuja cajas alrededor de texto. Perfecto para banners o avisos.
import boxen from "boxen";
// clear: limpia la terminal antes de mostrar contenido nuevo.
import { clear } from "node:console";

import { BOXEN_CONFIG } from "./constants.js";
import { passion } from "gradient-string";
import { waitTime, getTerminalSize } from "./utils.js";
import { info } from "./log.js";

export function clearConsole() {
  clear();
}

export async function banner(title = "THIS IS A BANNER") {
  const { width, height } = getTerminalSize();
  const text = await figlet.text(title, { width: width });
  console.log(passion(text));
}

export function contentBox(message) {
  const msgBox = boxen(message, {
    padding: BOXEN_CONFIG.padding,
    margin: BOXEN_CONFIG.margin,
    borderStyle: BOXEN_CONFIG.borderStyle,
    borderColor: BOXEN_CONFIG.borderColor,
    title: BOXEN_CONFIG.title,
    titleAlignment: BOXEN_CONFIG.titleAlignment,
    textAlignment: BOXEN_CONFIG.textAlignment,
  });

  console.log(msgBox);
}

export async function successMSG(foldername, template) {
  if (!foldername || !template) return;

  const useNpmStart =
    template.includes("nextjs") || template.includes("angular");

  const cmds = [
    ["Go to your project folder", `cd ${foldername}`],
    [
      "Runs the app in development mode",
      useNpmStart ? "npm start" : "npm run dev",
    ],
    ["Runs the test watcher in an interactive mode.", "npm test"],
    ["Build for production", "npm run build"],
  ];
  let output = info("Enjoy, here are some useful commands.\n\n", true);

  for (const [label, cmd] of cmds) {
    output += `- ${label}\n${info("        " + cmd, true)}\n\n`;
  }

  await waitTime(100);
  console.log(output);
}
