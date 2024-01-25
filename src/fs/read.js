import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    const filePath = path.resolve(__dirname, "files", "fileToRead.txt");
    const content = await fs.readFile(filePath, { encoding: "utf-8" });
    console.log(content);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await read();
