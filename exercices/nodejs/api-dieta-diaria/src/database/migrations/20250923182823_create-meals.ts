import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("meals", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("desc").notNullable();
        table.boolean("diet").notNullable();
        table.dateTime("date").defaultTo(knex.fn.now());
        table.integer("user_id").unsigned().notNullable().references("id").inTable("users").onDelete("CASCADE")
    });
}


export async function down(knex: Knex): Promise<void> {
}

