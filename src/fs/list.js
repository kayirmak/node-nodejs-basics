import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const filePath = path.resolve(__dirname, "files");
    const res = await fs.readdir(filePath);
    console.log(res);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await list();
