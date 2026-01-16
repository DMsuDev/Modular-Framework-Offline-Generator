import sevenZip from "7zip-min"; // npm install 7zip-min
import path from "node:path";

/**
 * Extracts a .7z archive (or other supported formats) to the target directory.
 * Returns a Promise that resolves when extraction is complete.
 *
 * @param {string} archivePath - Path to the archive file
 * @param {string} [targetDir = process.cwd()] - Destination folder (defaults to current working directory)
 * @returns {Promise<void>}
 * @throws {Error} If extraction fails
 */
export async function extractTemplate(archivePath, targetDir = process.cwd()) {
  try {
    // Resolve to absolute paths – safer and more predictable
    const archiveFullPath = path.resolve(archivePath);
    const targetFullPath = path.resolve(targetDir);

    // 7zip-min returns a Promise when no callback is provided
    await sevenZip.unpack(archiveFullPath, targetFullPath);
  } catch (err) {
    console.error(err.message);
    throw new Error(
      `Failed to extract archive ${archivePath}:\n` +
        `→ ${err.message}\n\n` +
        `Possible causes:\n` +
        `• Corrupted or damaged archive file\n` +
        `• No write permissions in ${targetDir}\n` +
        `• Format not supported by 7za\n` +
        `• Internal issue with 7zip-min binary`
    );
  }
}
