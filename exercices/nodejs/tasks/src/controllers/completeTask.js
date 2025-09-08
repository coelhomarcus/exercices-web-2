import url from "url";

export function completeTask(req, res, database) {
    const parsedUrl = url.parse(req.url, true);
    let parts = [];

    if (parsedUrl.pathname) parts = parsedUrl.pathname.split("/").slice(1);

    if (parts.length < 3 || !parts[1]) {
        return res.writeHead(400).end("ID da Task não fornecido");
    }

    if (parts[2] !== "complete") {
        return res.writeHead(400).end("Rota inválido");
    }

    if (database) {
        const task = database.read("tasks").find((task) => task.id === parts[1]);

        if (!task) {
            return res.writeHead(404).end("Task não encontrada");
        }

        if (task.completed_at === null) {
            task.completed_at = new Date();
        } else {
            task.completed_at = null;
        }

        task.updated_at = new Date();

        database.update("tasks", task.id, task);

        return res.writeHead(201).end(JSON.stringify(task));
    } else {
        return es.writeHead(400).end("Sem banco de dados");
    }
}