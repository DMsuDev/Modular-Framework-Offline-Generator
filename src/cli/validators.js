import fs from "fs";
import path from "path";

export const required =
  (msg = "This field is required") =>
  (v) =>
    v.trim() ? true : msg;

export const semver = (v) => {
  const trimmed = v.trim();
  if (!trimmed) return "Version required";
  if (!/^\d+\.\d+\.\d+(?:[-+].*)?$/.test(trimmed)) {
    return "Invalid semver (x.y.z or x.y.z-beta)";
  }
  return true;
};

export const folderName = async (v) => {
  const name = v.trim();
  if (!name) return "Name required";
  if (!/^[a-z0-9-]+$/.test(name)) return "Only lowercase, numbers, hyphens";
  if (
    await fs.promises
      .access(path.join(process.cwd(), name))
      .then(() => true)
      .catch(() => false)
  ) {
    return "Folder already exists";
  }
  return true;
};
