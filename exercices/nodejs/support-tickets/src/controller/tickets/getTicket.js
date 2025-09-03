import url from "url";

export function getTicket(req, res, database) {
    const parsedUrl = url.parse(req.url, true);

    if (database) {
        if (parsedUrl.query.status) {
            if (parsedUrl.query.status !== "open" && parsedUrl.query.status !== "closed") {
                return res.writeHead(400).end("Status inválido");
            }

            return res.writeHead(201).end(
                JSON.stringify(
                    database.read("tickets").filter((ticket) => {
                        return ticket.status === parsedUrl.query.status;
                    })
                )
            );
        }
        return res.writeHead(201).end(JSON.stringify(database.read("tickets")));
    } else {
        return es.writeHead(400).end("Sem banco de dados");
    }
}
