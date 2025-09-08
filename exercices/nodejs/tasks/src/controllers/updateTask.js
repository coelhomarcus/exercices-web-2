import url from "url";

export function updateTask(req, res, database) {
    const parsedUrl = url.parse(req.url, true);
    let parts = [];

    if (parsedUrl.pathname) parts = parsedUrl.pathname.split("/").slice(1);

    if (parts.length < 2 || !parts[1]) {
        return res.writeHead(400).end("ID da Task não fornecido");
    }

    if (database) {
        const task = database.read("tasks").find((task) => task.id === parts[1]);

        if (!task) {
            return res.writeHead(404).end("Task não encontrada");
        }

        if (req.body.title) {
            task.title = req.body.title;
        }

        if (req.body.description) {
            task.description = req.body.description;
        }

        task.updated_at = new Date();

        database.update("tasks", task.id, task);

        return res.writeHead(201).end(JSON.stringify(task));
    } else {
        return es.writeHead(400).end("Sem banco de dados");
    }
}