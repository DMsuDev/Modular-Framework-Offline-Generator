import path from "path";
import fs from "fs/promises";
import chalk from "chalk";
import ora from "ora";
import { error } from "../cli/config/log.js";
import { extractTemplate } from "./extractor.js";
import { updatePackageFiles } from "./replacer.js";
import { paths } from "../cli/config/constants.js";

/**
 * Main function that generates the complete project
 * @param {Object} answers - User answers (name, version, framework, language, etc.)
 */
export async function generateProject(answers) {
  const { name, version = "0.1.0", framework, language = "" } = answers;

  const projectName = name.trim();
  const targetDir = path.join(process.cwd(), projectName);

  const message = `Creating: ${chalk.dim(
    projectName
  )} with framework ${chalk.dim(framework)}${chalk.dim(
    language ? ` (${language.slice(1)})` : ""
  )}`;

  const spinner = ora(message).start();

  try {
    // 1. Check if target directory already exists
    try {
      await fs.access(targetDir);
      console.log(
        chalk.red(`Error: Directory "${projectName}" already exists.`)
      );
      console.log(
        chalk.yellow(
          "Solution: choose a different name or delete the existing folder."
        )
      );
      process.exit(1);
    } catch {
      // Directory doesn't exist → good to proceed
    }

    // 2. Create target directory
    await fs.mkdir(targetDir, { recursive: true });

    // 3. Determine template archive name
    const templateName = `${framework}${language}`;
    const templatePath = path.join(paths.templatesDir, `${templateName}.7z`);

    // Verify template exists
    try {
      await fs.access(templatePath);
    } catch {
      throw new Error(
        `Template not found: ${templatePath}\n` +
          `Make sure the file exists in the /templates/ directory.`
      );
    }

    // 4. Extract template & update package files
    await extractTemplate(templatePath, targetDir);
    await updatePackageFiles(targetDir, projectName, version);

    spinner.succeed("Project created successfully!");
    console.log(
      chalk.dim(
        `\nNext steps:\n  cd ${projectName}\n  npm install\n  npm run dev\n`
      )
    );
  } catch (err) {
    spinner.fail("Failed to create project");

    console.error(error("\nError during project generation:"));
    console.error(chalk.red(err.message));

    // Clean up partial project in case of error
    try {
      await fs.rm(targetDir, { recursive: true, force: true });
      console.log(
        chalk.dim(
          "Partially created folder was removed to avoid inconsistencies."
        )
      );
    } catch {
      // Ignore cleanup errors
    }

    process.exit(1);
  }
}
