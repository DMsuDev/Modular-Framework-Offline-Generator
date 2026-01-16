// chalk: colorea texto en la terminal. Ideal para resaltar mensajes.
import chalk from "chalk";

export const error = (msg, bold = false) =>
  bold ? chalk.red.bold(msg) : chalk.red(msg);

export const success = (msg, bold = false) =>
  bold ? chalk.greenBright.bold(msg) : chalk.greenBright(msg);

export const warning = (msg, bold = false) =>
  bold ? chalk.yellow.bold(msg) : chalk.yellow(msg);

export const info = (msg, bold = false) =>
  bold ? chalk.cyan.bold(msg) : chalk.cyan(msg);

export const highlight = (msg, bold = false) =>
  bold ? chalk.white.bold(msg) : chalk.white(msg);
