import * as fs from "fs";
import * as os from "os";

import getItemData from "./getItemData.js";

export default function getFolderData(filePath, withItems = true) {
    const listItems = fs.readdirSync(filePath);

    if (!withItems) return {
        itemNames: listItems,
        count: listItems.count
    }

    if (!listItems.length) return listItems;

    return {
        items: listItems.map((item) => {
            return getItemData(path.resolve(os.homedir(), item), item)
        }),
        count: listItems.count
    }
}