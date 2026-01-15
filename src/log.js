// chalk: colorea texto en la terminal. Ideal para resaltar mensajes.
import chalk from "chalk";

export const errorLog = (msg, bold = false) =>
  bold ? chalk.red.bold(msg) : chalk.red(msg);

export const successLog = (msg, bold = false) =>
  bold ? chalk.greenBright.bold(msg) : chalk.greenBright(msg);

export const warningLog = (msg, bold = false) =>
  bold ? chalk.yellow.bold(msg) : chalk.yellow(msg);

export const infoLog = (msg, bold = false) =>
  bold ? chalk.cyan.bold(msg) : chalk.cyan(msg);

export const highlightLog = (msg, bold = false) =>
  bold ? chalk.white.bold(msg) : chalk.white(msg);
