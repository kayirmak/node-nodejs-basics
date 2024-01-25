import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  try {
    const filePath = path.resolve(__dirname, "files", "fileToRemove.txt");
    await fs.unlink(filePath);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await remove();
