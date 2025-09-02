export function getTicket(req, res, database) {
    if (database) {
        return res.writeHead(201).end(JSON.stringify(database.read("tickets")))
    }
    else {
        return es.writeHead(400).end("Sem banco de dados");
    }
}