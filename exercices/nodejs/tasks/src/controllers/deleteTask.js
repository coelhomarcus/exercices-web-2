import url from "url";

export function deleteTask(req, res, database) {
    const parsedUrl = url.parse(req.url, true);
    let parts = [];

    if (parsedUrl.pathname) parts = parsedUrl.pathname.split("/").slice(1);

    if (parts.length < 2 || !parts[1]) {
        return res.writeHead(400).end("ID da Task não fornecido");
    }

    if (database) {
        const task = database.read("tasks").find((task) => task.id === parts[1]);

        if (task) {
            database.delete("tasks", task.id);
            return res.writeHead(200).end("Task excluída");
        } else {
            return res.writeHead(404).end("Task não encontrado");
        }
    } else {
        return es.writeHead(400).end("Sem banco de dados");
    }
}