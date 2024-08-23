import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import getItemData from "./getItemData.js";

export default function getHome() {
  const homeDir = os.homedir();
  let files = fs.readdirSync(homeDir);

  let pinnedFolders = [
    "Desktop",
    "Downloads",
    "Documents",
    "Pictures",
    "Music",
    "Videos"
  ]

  files = files.map((item) => {
    if (pinnedFolders.includes(item))
      return getItemData(path.resolve(homeDir, item), item)
  });

  return files.filter((item) => item !== undefined);

 
}