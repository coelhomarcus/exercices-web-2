import { knex } from "../../database/knex.ts"
import type { FastifyRequest } from "fastify";


interface Meal {
   id?: number,
   name: string,
   desc: string,
   diet: boolean,
   date?: Date,
   user_id: number,
}

export async function createMeal(request: FastifyRequest) {
   const { name, desc, diet, user_id } = request.body as Meal
   if (!name || !desc || !diet || !user_id) {
      return "Por favor, preencha todos os campos!"
   }

   const insertMeal = await knex("meals").insert({ name, desc, diet, user_id })

   return {
      message: `Refeição ${name} criada com sucesso!`, meal: {
         id: insertMeal[0],
         name,
         desc,
         diet,
         user_id
      }
   }
}

export async function getAllMealByUserId(request: FastifyRequest) {
   const { user_id } = request.headers
   const meal = await knex("meals").select().where({ user_id })
   const user = await knex("users").select().where({ id: user_id })

   if (meal.length === 0) return { message: "Nenhuma refeição encontrada!" }

   const data = meal.map(meal => {
      return {
         user: user[0].name,
         ...meal
      }
   })

   return data
}


export async function getMealByIdAndUserId(request: FastifyRequest) {
   const { id } = request.params as Meal
   const { user_id } = request.headers

   const meal = await knex("meals").select().where({ user_id, id }).first()
   if (!meal) return { message: `Refeição de id ${id} não encontrada!` }
   const user = await knex("users").select().where({ id: user_id })

   if (meal.length === 0) return { message: "Nenhuma refeição encontrada!" }

   const data = {
      user: user[0].name,
      ...meal
   }

   return data
}

export async function updateMealByIdAndUserId(request: FastifyRequest) {
   const { id, user_id } = request.headers

   if (!id) return { message: "Por favor, informe o id da refeição!" }
   if (!user_id) return { message: "Por favor, informe o id do usuário!" }

   const { name, desc, diet } = request.body as Meal

   const meal = await knex("meals").select().where({ user_id, id })
   const user = await knex("users").select().where({ id: user_id })

   if (meal.length === 0) {
      return { message: `Refeição de id ${id} não encontrada!` }
   }

   console.log(name, desc, diet)

   const newMeal = meal[0]

   if (name) {
      newMeal.name = name
   }
   if (desc) {
      newMeal.desc = desc
   }
   if (diet !== undefined) {
      newMeal.diet = diet
   }

   if (!name && !desc && diet === undefined) {
      return { message: "Nenhum campo para atualizar!" }
   }

   console.log(newMeal)

   await knex("meals").where({ id }).update({ name: newMeal.name, desc: newMeal.desc, diet: newMeal.diet })

   const data = {
      user: user[0].name,
      ...newMeal
   }

   return data
}

export async function deleteMealByIdAndUserId(request: FastifyRequest) {
   const { id, user_id } = request.headers

   if (!id) return "Por favor, informe o id da refeição!"
   if (!user_id) return "Por favor, informe o id do usuário!"

   const deleteMeal = await knex("meals").delete().where({ id, user_id })

   if (!deleteMeal) {
      return { message: `Refeição de id ${id} não encontrada!` }
   }

   return { message: `Refeição de id ${id} deletada!` }
}
