import { createTask } from "../controllers/createTask.js";
import { getTask } from "../controllers/getTask.js";
import { updateTask } from "../controllers/updateTask.js";
import { deleteTask } from "../controllers/deleteTask.js";
import { completeTask } from "../controllers/completeTask.js";

export const tasksRoutes = [
    {
        method: "POST",
        path: "/tasks",
        controller: createTask,
    },
    {
        method: "GET",
        path: "/tasks",
        controller: getTask,
    },
    {
        method: "PUT",
        path: "/tasks",
        controller: updateTask,
    },
    {
        method: "DELETE",
        path: "/tasks",
        controller: deleteTask,
    },
    {
        method: "PATCH",
        path: "/tasks",
        controller: completeTask,
    }
];