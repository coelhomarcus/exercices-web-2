import fastify from "fastify";


import { getAllUsers, getUserById, getUserMetricsById, createUser } from "./controllers/users/userController.ts";
import { createMeal, getAllMealByUserId, updateMealByIdAndUserId, getMealByIdAndUserId, deleteMealByIdAndUserId } from "./controllers/meals/mealsController.ts";

const app = fastify()

// Listar todos os usuários
app.get('/users', getAllUsers)


// Criar usuário
app.post('/users', createUser)

// Buscar usuário por ID
app.get('/users/:id', getUserById)

// Criar refeição
app.post('/meal', createMeal)

// Listar todas refeições por usuário
app.get('/meal', getAllMealByUserId)

// Buscar refeição por ID e usuário
app.get('/meal/:id', getMealByIdAndUserId)

// Atualizar refeição por ID e usuário
app.put('/meal', updateMealByIdAndUserId)

// Deletar refeição por ID e usuário
app.delete('/meal', deleteMealByIdAndUserId)

// Métricas do usuário
app.get('/metrics', getUserMetricsById)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running")
})
