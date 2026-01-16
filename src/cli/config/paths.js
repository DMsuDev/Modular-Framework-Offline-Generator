import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const paths = {
  templatesDir: join(__dirname, "../../..", "templates"),
};
