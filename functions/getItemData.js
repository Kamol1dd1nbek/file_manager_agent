import * as fs from "fs";
import * as path from "path";

// async function getItemData(path) {
//     try {
//         let response = {};

//         const stats = await fs.stat(path, (err, stats) => {
//             if(err) throw err;
//             response.isFolder = stats.isDirectory();
//         })
//         return stats;
//     } catch (error) {
//         console.log(error)
//     }
// }

export default async function getItemData(path, name) {
    let res = {
        path,
        name
    };

    fs.stat(path, (err, stats) => {
        if (err) {
            console.error(`Error: ${err.message}`);
            return;
        }

        res.type = stats.isDirectory();
    });

    return res;
};