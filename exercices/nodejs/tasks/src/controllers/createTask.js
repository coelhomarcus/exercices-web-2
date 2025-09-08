import { randomUUID } from "node:crypto";

export function createTask(req, res, database) {
    const { title, description } = req.body;
    if (title && description) {
        const task = {
            id: randomUUID(),
            title,
            description,
            completed_at: null,
            created_at: new Date(),
            updated_at: new Date(),
        };

        database.insert("tasks", task);

        return res.writeHead(201).end(JSON.stringify(task));
    } else {
        return res.writeHead(400).end("Dados inválidos");
    }
}