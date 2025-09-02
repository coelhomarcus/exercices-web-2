import { createTicket } from "../controller/tickets/create.js";
import { getTicket } from "../controller/tickets/getTicket.js";

export const tickets = [
    {
        method: 'POST',
        path: '/tickets',
        controller: createTicket
    },
    {
        method: 'GET',
        path: '/tickets',
        controller: getTicket
    },
]