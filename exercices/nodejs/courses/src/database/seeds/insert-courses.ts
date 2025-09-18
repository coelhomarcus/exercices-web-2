import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    { name: "Java" },
    { name: "React" },
    { name: "Python" },
    { name: "C#" },
    { name: "GO" }
  ]);
};
