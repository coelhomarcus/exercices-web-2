import Knex from "knex";

export async function seed(knex: Knex.Knex): Promise<void> {
   await knex("users").del();

   await knex("users").insert([
      { name: "Marcus Coelho" },
      { name: "Vitoria Leda" },
      { name: "Luis Otavio" },
   ]);
};
