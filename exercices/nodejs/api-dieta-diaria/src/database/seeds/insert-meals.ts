import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
   await knex("meals").del();

   await knex("meals").insert([
      { name: "Arroz com frango", desc: "Peito de frango grelhado com arroz integral", diet: true, user_id: 1 },
      { name: "Pizza", desc: "Calabresa com queijo", diet: false, user_id: 1 },
      { name: "Salada", desc: "Mix de folhas verdes com azeite", diet: true, user_id: 2 },
      { name: "Hambúrguer", desc: "Hambúrguer artesanal com batata frita", diet: false, user_id: 2 },
      { name: "Omelete", desc: "Ovos mexidos com tomate e cebola", diet: true, user_id: 3 },
      { name: "Lasanha", desc: "Lasanha de carne ao molho branco", diet: false, user_id: 3 },
   ]);
}
