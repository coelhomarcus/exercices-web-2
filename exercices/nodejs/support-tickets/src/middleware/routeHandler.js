import url from "url";
import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
const database = new Database();

export function routeHandler(req, res) {
    const parsedUrl = url.parse(req.url, true);

    const route = routes.find((route) => {
        return route.method === req.method && route.path === parsedUrl.pathname;
    });

    if (route) {
        return route.controller(req, res, database);
    }

    return res.writeHead(404).end();
}
