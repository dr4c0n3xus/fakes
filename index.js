import { generateImage } from "./src/generateImage.js";
import { getAction } from "./src/getAction.js";
import { getImage } from "./src/getImage.js";
import { saveImage } from "./src/saveImage.js";

const action = await getAction();
const image_id = await generateImage(action);
const imageData = await getImage(image_id);
await saveImage(imageData);
