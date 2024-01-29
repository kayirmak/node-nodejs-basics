import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const stream = createWriteStream(
    path.resolve(__dirname, "files", "fileToWrite.txt")
  );

  process.stdin.pipe(stream);
};

await write();
