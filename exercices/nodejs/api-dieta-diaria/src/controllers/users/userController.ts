
import type { FastifyRequest } from "fastify"
import { knex } from "../../database/knex.ts"

interface User {
   id: number,
   name: string,
}

export async function createUser(request: FastifyRequest) {
   const { name } = request.body as User;
   if (!name) return { message: "Passe o nome do Usuario" }
   const newUser = await knex("users").insert({ name })
   return { message: "Usuario criado com sucesso!" }
}

export async function getAllUsers() {
   const users = await knex("users").select().orderBy("id")
   if (!users) {
      return { message: `Sem usuários no banco de dados` }
   }
   return users
}

export async function getUserById(request: FastifyRequest) {
   const { id } = request.params as User
   const user = await knex("users").select().where({ id })
   if (!user) {
      return { message: `Usuário de id ${id} não encontrado!` }
   }

   return user
}

export async function getUserMetricsById(request: FastifyRequest) {
   const { user_id } = request.headers

   const meals = await knex("meals").select().where({ user_id })
   if (meals.length === 0) return { message: "Nenhuma refeição encontrada!" }

   const totalMeals = meals.length
   const totalMealsInDiet = meals.filter(meal => meal.diet === 1).length
   const totalMealsOutDiet = meals.filter(meal => meal.diet === 0).length

   const bestSequence = () => {
      let count = 0
      let bestCount = 0

      meals.forEach(meal => {
         if (meal.diet === 1) count++
         else {
            if (count > bestCount) {
               bestCount = count
            }
            count = 0
         }
      })

      if (count > bestCount) {
         bestCount = count
      }

      return bestCount
   }

   const bestDietSequence = bestSequence()

   return {
      totalMeals,
      totalMealsInDiet,
      totalMealsOutDiet,
      bestDietSequence
   }
}
