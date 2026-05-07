import { rename, access } from "node:fs/promises";
import { join } from "node:path";

const out = "out";
const renames = [
  ["opengraph-image", "opengraph-image.png"],
  ["twitter-image", "twitter-image.png"],
];

for (const [from, to] of renames) {
  const src = join(out, from);
  const dst = join(out, to);
  try {
    await access(src);
    await rename(src, dst);
    console.log(`renamed ${src} -> ${dst}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`skipped: ${src} not present`);
    } else {
      throw err;
    }
  }
}
