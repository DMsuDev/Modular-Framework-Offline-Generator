import { clear } from "node:console";
import { stdout } from "node:process";

/**
 * Clears the terminal/console in a cross-platform way
 */
export function clearConsole() {
  clear();

  // Fallback using ANSI escape codes (useful in some environments where console.clear() fails)
  // stdout.write('\x1B[2J\x1B[3J\x1B[H');
}

/**
 * Gets the current dimensions of the terminal window
 * @returns {{ width: number, height: number }} Terminal columns and rows
 */
export function getTerminalSize() {
  return {
    width: stdout.columns || 80, // fallback to 80 columns if undefined
    height: stdout.rows || 24, // fallback to 24 rows if undefined
  };
}

/**
 * Simple async delay / pause
 * @param {number} [ms=100] - Milliseconds to wait
 * @returns {Promise<void>}
 */
export function waitTime(ms = 100) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
