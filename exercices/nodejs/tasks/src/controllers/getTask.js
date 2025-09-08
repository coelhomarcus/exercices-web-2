import url from "url";

export function getTask(req, res, database) {
    const parsedUrl = url.parse(req.url, true);

    if (database) {
        if (parsedUrl.query.title || parsedUrl.query.description) {
            const description = parsedUrl.query.description;
            const title = parsedUrl.query.title;

            if (description) {
                return res
                    .writeHead(200)
                    .end(
                        JSON.stringify(database.read("tasks").filter((task) => task.description.includes(description)))
                    );
            }

            if (title) {
                if (description) {
                    return res
                        .writeHead(200)
                        .end(
                            JSON.stringify(
                                database
                                    .read("tasks")
                                    .filter(
                                        (task) => task.title.includes(title) && task.description.includes(description)
                                    )
                            )
                        );
                }

                return res
                    .writeHead(200)
                    .end(JSON.stringify(database.read("tasks").filter((task) => task.title.includes(title))));
            }
        }
        return res.writeHead(200).end(JSON.stringify(database.read("tasks")));
    } else {
        return es.writeHead(400).end("Sem banco de dados");
    }
}
