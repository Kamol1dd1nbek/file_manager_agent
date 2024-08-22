import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { fileURLToPath } from 'url';
import getItemData from "./getItemData.js";
// console.log(extname(os.homedir() + "\\Desktop\\iFile\\file_manager_agent\\main.js"))
// getItemData(os.homedir() + "\\.ssh")

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default  function getFolderData(filePath) {
    const listItems = fs.readdirSync(filePath);

    if(!listItems.length) return listItems;

    return listItems.map((item) => {
        return getItemData(path.resolve(os.homedir(), "Desktop"), "Desctop")
    });
}