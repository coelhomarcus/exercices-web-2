import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
    #database = {};

    constructor() {
        fs.readFile(DATABASE_PATH, "utf-8")
            .then((data) => {
                this.#database = JSON.parse(data);
            })
            .catch(() => {
                this.#persist();
            });
    }

    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data);
        } else {
            this.#database[table] = [data];
        }

        this.#persist();
    }

    read(table) {
        return this.#database[table] ?? [];
    }

    update(table, id, data) {
        const index = this.#database[table].findIndex((item) => item.id === id);

        if (index > -1) {
            this.#database[table][index] = { id, ...data };
            this.#persist();
        }
    }

    delete(table, id) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table] = this.#database[table].filter((item) => item.id !== id);
        }

        this.#persist();
    }
}