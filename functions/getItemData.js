import * as fs from "fs";

export default function getItemData(path, name) {
    let stats = fs.statSync(path);

    let res = {
        path,
        name,
        isFolder: stats.isDirectory(),
        size: !stats.isDirectory() ? stats.size : undefined,
        atime: stats.atime,
        mtime: stats.mode,
        ctime: stats.ctime,
        birthtime: stats.birthtime
    };

    return res;
};