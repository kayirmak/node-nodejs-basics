import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  try {
    const oldPath = path.resolve(__dirname, "files", "wrongFilename.txt");
    const newPath = path.resolve(__dirname, "files", "properFilename.md");
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

await rename();
