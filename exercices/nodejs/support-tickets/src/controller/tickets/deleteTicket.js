import url from "url";

export function deleteTicket(req, res, database) {
    const parsedUrl = url.parse(req.url, true);
    const parts = parsedUrl.pathname.split("/").slice(1);

    if (parts.length < 2 || !parts[1]) {
        return res.writeHead(400).end("ID do ticket não fornecido");
    }

    if (database) {
        const ticket = database.read("tickets").find((ticket) => ticket.id === parts[1]);

        if (ticket) {
            database.delete("tickets", ticket.id);
            return res.writeHead(200).end("Ticket excluído");
        } else {
            return res.writeHead(404).end("Ticket não encontrado");
        }
    } else {
        return es.writeHead(400).end("Sem banco de dados");
    }
}
