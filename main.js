"use strict";

import * as http from "http";

import { getFolderData } from "./functions/index.js";
import getHome from "./functions/getHome.js";


const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        const data = getHome();

        res.end(JSON.stringify(data))
    } else {
        res.end("Not found")
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Agent is running on port ${PORT}`)
})




// getFolderData('C:\\Users\\Kamoliddin\\Desktop\\iFile\\file_manager_agent\\')