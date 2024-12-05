import inquirer from "inquirer";

export async function getAction() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "choose a style:",
      choices: [
        "Default",
        "Ass up",
        "Bikinipull",
        "Breast grab",
        "Bukkake",
        "Cowgirl",
        "Cum in Mouth",
        "Cumshot",
        "Cumshot on face",
        "Dildo",
        "Dripping cum",
        "Flashing tits",
        "Footjob",
        "Hotsquat",
        "Legs up anal sex",
        "Legs up pussy",
        "Missionary anal",
        "Missionary Panties",
        "Nipple clamps",
        "Pussy masturbation",
        "Pussy spread",
        "Shibari",
        "Titfuck",
      ],
    },
  ]);
  return answer.action;
}
