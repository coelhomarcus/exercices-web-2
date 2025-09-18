import fastify from "fastify";
import { knex } from "./database/knex"

const app = fastify()

interface Course {
  id: number,
  name: string,
}

app.get('/courses', async () => {
  const courses = await knex("courses")
    .select().orderBy("name")
  return courses
})

app.post('/courses', async ({ body }, _) => {
  const { name } = body as Course
  const insertCourse = await knex("courses").insert({ name: name })

  return `Curso ${name} adicionado!`
})

app.put('/courses/:id', async ({ body }, _) => {
  const { id, name } = body as Course
  const findCourse = await knex("courses").update({ name }).where({ id })


  return `Curso de id: ${id} foi atualizado para o nome ${name}`
})

app.delete('/courses/:id', async ({ body }, _) => {
  const { id } = body as Course
  const deleteCourse = await knex("courses").delete().where({ id })

  return `Curso de id ${id} foi deletado!`
})

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running")
})
