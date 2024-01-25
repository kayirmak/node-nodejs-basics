import { access, constants, writeFile } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const filePath = `${__dirname}/files`;

const create = async () => {
  try {
    access(resolve(filePath, "fresh.txt"), constants.F_OK, (err) => {
      if (!err) {
        throw Error(`FS operation failed`);
      }
      writeFile(
        resolve(filePath, "fresh.txt"),
        "I am fresh and young",
        (err) => {
          if (err) throw err;
        }
      );
    });
  } catch (error) {
    console.error("FS operration failed");
  }
};

await create();
