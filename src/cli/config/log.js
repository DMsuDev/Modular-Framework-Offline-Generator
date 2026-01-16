import chalk from "chalk";

const createLogger = (colorFn, defaultBold = false) => {
  return (message, bold = defaultBold) => {
    const fn = bold ? colorFn.bold : colorFn;
    return fn(message);
  };
};

// Loggers main
export const error = createLogger(chalk.red, true);
export const success = createLogger(chalk.greenBright);
export const warn = createLogger(chalk.yellow, true);
export const info = createLogger(chalk.cyan);
export const highlight = createLogger(chalk.white.bold);

export const debug = createLogger(chalk.gray);
export const important = createLogger(chalk.magentaBright.bold);
export const dim = createLogger(chalk.gray.dim);
