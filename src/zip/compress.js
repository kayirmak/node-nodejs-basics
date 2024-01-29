import fs from "fs";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const readStream = fs.createReadStream(
    path.resolve(__dirname, "files", "fileToCompress.txt")
  );
  const writeStream = fs.createWriteStream(
    path.resolve(__dirname, "files", "archive.gz")
  );

  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
