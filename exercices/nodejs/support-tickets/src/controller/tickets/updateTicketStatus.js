import url from "url";

export function updateTicketStatus(req, res, database) {
    const parsedUrl = url.parse(req.url, true);
    const parts = parsedUrl.pathname.split("/").slice(1);

    if (parts.length < 3 || !parts[2]) {
        return res.writeHead(400).end("ID do ticket ou rota inválida");
    }

    if (database) {
        if (req.body.status) {
            if (req.body.status !== "open" && req.body.status !== "closed") {
                return res.writeHead(400).end("Status inválido");
            }

            const ticket = database.read("tickets").find((ticket) => ticket.id === parts[1]);

            if (!ticket) {
                return res.writeHead(404).end("Ticket não encontrado");
            }

            ticket.status = req.body.status;
            ticket.updated_at = new Date();
            return res.writeHead(201).end(JSON.stringify(ticket));
        } else {
            return res.writeHead(400).end("Status não fornecido");
        }
    } else {
        return es.writeHead(400).end("Sem banco de dados");
    }
}
