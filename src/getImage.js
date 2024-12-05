import { createSpinner } from "nanospinner";
import { exit } from "process";

export async function getImage(image_id) {
  try {
    const spinner = createSpinner("generating image...").start();
    let res = await fetch(`https://cdn1.pornx.ai/${image_id}`);
    while (res.status === 404) {
      await new Promise((resolve) => setTimeout(resolve, 30000));
      res = await fetch(`https://cdn1.pornx.ai/${image_id}`);
    }
    const data = res.body;
    if (data) spinner.success({ text: "image generated" });
    return data;
  } catch (error) {
    spinner.error({ text: "falied to generate image" });
    console.error(error.message);
    exit(1);
  }
}
