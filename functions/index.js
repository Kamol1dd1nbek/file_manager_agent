import * as path from "path";
import { fileURLToPath } from 'url';

import getFolderData from "./getFolderData.js";
import getItemData from "./getItemData.js";
import getHome from "./getHome.js";
import addNew from "./addNew.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export { __dirname, getFolderData, getItemData, getHome, addNew }