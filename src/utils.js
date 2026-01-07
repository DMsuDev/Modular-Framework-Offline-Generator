export function validateProjectName(input) {
  if (!input || !input.trim()) return "El nombre no puede estar vacío.";
  if (/\s/.test(input)) return "Evita espacios en el nombre del proyecto.";
  return true;
}

export const waitTime = (ms = 100) =>
  new Promise(resolve => setTimeout(resolve, ms));

export function getTerminalSize() {
  return {
    width: process.stdout.columns,
    height: process.stdout.rows
  };
}