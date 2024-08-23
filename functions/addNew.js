import * as fs from "fs";

export default function addNew(path, type, data = "") {
    if (type === "folder") {
        fs.mkdirSync(path, { recursive: true });
        return {message: "successfully created"}
    } else {
        fs.writeFileSync(path, data);
        return {message: "successfully created"}
    }
}
