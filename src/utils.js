export function validateProjectName(input) {
  if (!input || !input.trim()) return "The name cannot be empty.";
  if (/\s/.test(input)) return "Avoid spaces in the project name.";
  return true;
}

export const waitTime = (ms = 100) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function getTerminalSize() {
  return {
    width: process.stdout.columns,
    height: process.stdout.rows,
  };
}
