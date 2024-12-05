import fs from "fs/promises";
import path from "path";
import { createSpinner } from "nanospinner";
import { exit } from "process";

export async function saveImage(image, imageName = "source") {
  try {
    const spinner = createSpinner("saving image...").start();
    const dir = path.resolve("data");
    const filePath = path.join(dir, `${imageName}-${Date.now()}.png`);

    await fs.mkdir(dir, { recursive: true });

    await fs.writeFile(filePath, image);

    if (filePath) spinner.success({ text: `image saved @ ${filePath}` });
    return filePath;
  } catch (error) {
    spinner.error({ text: "falied to save image" });
    console.error(error.message);
    exit(1);
  }
}
