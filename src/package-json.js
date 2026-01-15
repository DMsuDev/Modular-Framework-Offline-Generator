import { errorLog } from "./log.js";
import { join } from "node:path";
import fs from "node:fs";

function updateJsonFile(filePath, updater) {
  if (!fs.existsSync(filePath)) {
    console.log(errorLog(`ERROR: ${filePath} was not found.`));
    return false;
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const updated = updater(data);

  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
  return true;
}

export async function updatePackageJson(
  projectPath,
  projectName,
  projectVersion
) {
  const pkgPath = join(projectPath, "package.json");
  const pkgLockPath = join(projectPath, "package-lock.json");

  updateJsonFile(pkgPath, (pkg) => {
    pkg.name = projectName;
    pkg.version = projectVersion;
    return pkg;
  });

  updateJsonFile(pkgLockPath, (lock) => {
    lock.name = projectName;
    lock.version = projectVersion;

    if (lock.packages && lock.packages[""]) {
      lock.packages[""].name = projectName;
      lock.packages[""].version = projectVersion;
    }

    return lock;
  });
}
