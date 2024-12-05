import axios from "axios";
import { exit } from "process";

export async function generateImage(action) {
  try {
    const formData = {
      positive_prompt: [
        "1",
        "5",
        "8",
        "35",
        "61",
        "80",
        "83",
        "89",
        "111",
        "125",
        "126",
        "500",
        "197",
        "189",
      ],
      negative_prompt: "",
      generator: "Photorealism",
      action: "Default",
      advanced_settings: {
        aspect_ratio: "2:3",
        seed: null,
        quality: "Base",
        creativity: "Balance",
        sliders: {
          "057": "0.0",
          "058": "0.0",
          "059": "0.0",
          "060": "0.0",
          "061": "0.0",
          "062": "0.0",
          "065": "0.0",
          "066": "0.0",
          "070": "0.0",
        },
        private_gen_request: false,
        clipSkip: false,
        styleValue: "Default",
        lcm_pipeline: false,
        vision_turbo: false,
      },
      custom_prompt: false,
      customPoseImage: null,
      customFaceImage: null,
      customPoseFromUrl: false,
      customFaceFromUrl: false,
      woman_day: false,
    };
    const res = await axios.post(
      "https://extra.pornx.ai/generator/image",
      formData,
    );
    const image_id = res.data.data.image_id;

    return image_id;
  } catch (error) {
    console.error(error.message);
    exit(1);
  }
}
