"use strict";

import * as http from "http";

import { addNew } from "./functions/index.js";
import getHome from "./functions/getHome.js";

const setCORSHeaders = (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

const server = http.createServer((req, res) => {
    let { method, url } = req;
    setCORSHeaders(res);
    if (method === "GET") {
        if (url === "/home") {
            const data = getHome();
            res.end(JSON.stringify(data))
        } else if (url === "/folder") {

        } else {
            res.end("Not found")
        }
    } else if (method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        })

        req.on("end", () => {
            body = JSON.parse(body);

            if (url === "/new") {
                let response = addNew(body.path, body.type)
                res.end(JSON.stringify(response))
            }
        });


    } else if (method === "PUT") {

    } else if (method === "DELETE") {

    } else {
        res.end("Not found")
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Agent is running on port ${PORT}`)
})




// getFolderData('C:\\Users\\Kamoliddin\\Desktop\\iFile\\file_manager_agent\\')