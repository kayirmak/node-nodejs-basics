import path from "path";
import fs from "fs/promises";
import { access, constants } from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = `${__dirname}/files`;
const destPath = `${__dirname}/files_copy`;

const copy = async () => {
  try {
    const dir = await fs.mkdir(path.resolve(__dirname, "files_copy"), {
      recursive: true,
    });
    if (!dir) {
      throw new Error("FS operation failed");
    }

    const files = await fs.readdir(filePath);

    for (const file of files) {
      access(`${destPath}/${file}`, constants.F_OK, (err) => {
        if (!err) {
          throw new Error("FS operation failed");
        }
      });
      const current = path.join(filePath, file);
      const dest = path.join(`${destPath}/`, file);
      await fs.copyFile(current, dest);
    }
  } catch (error) {
    console.log(error);
  }
};

await copy();
