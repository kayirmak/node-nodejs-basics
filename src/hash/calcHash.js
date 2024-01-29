import path from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const file = path.resolve(__dirname, "fileToCalculateHashFor.txt");

  const hash = createHash("sha256").update(file).digest("hex");
  console.log(hash);
};

await calculateHash();
