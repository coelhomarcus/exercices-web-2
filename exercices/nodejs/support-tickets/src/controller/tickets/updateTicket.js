import url from "url";

export function updateTicket(req, res, database) {
    const parsedUrl = url.parse(req.url, true);
    const parts = parsedUrl.pathname.split("/").slice(1);

    if (parts.length < 2 || !parts[1]) {
        return res.writeHead(400).end("ID do ticket não fornecido");
    }

    if (database) {
        if (!req.body.equipment || !req.body.description) {
            return res.writeHead(400).end("Dados inválidos");
        }
        const ticket = database.read("tickets").find((ticket) => ticket.id === parts[1]);

        if (!ticket) {
            return res.writeHead(404).end("Ticket não encontrado");
        }

        ticket.equipment = req.body.equipment;
        ticket.description = req.body.description;

        return res.writeHead(201).end(JSON.stringify(ticket));
    } else {
        return es.writeHead(400).end("Sem banco de dados");
    }
}
