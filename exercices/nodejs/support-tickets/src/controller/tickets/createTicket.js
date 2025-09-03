import { randomUUID } from "node:crypto";

export function createTicket(req, res, database) {
    const { equipment, description, username } = req.body;
    if (equipment && description && username) {
        const ticket = {
            id: randomUUID(),
            equipment,
            description,
            username,
            status: "open",
            created_at: new Date(),
            updated_at: new Date(),
        };
        database.insert("tickets", ticket);

        return res.writeHead(201).end(JSON.stringify(ticket));
    } else {
        return res.writeHead(400).end("Dados inválidos");
    }
}
