import { createTicket } from "../controller/tickets/createTicket.js";
import { getTicket } from "../controller/tickets/getTicket.js";
import { updateTicket } from "../controller/tickets/updateTicket.js";
import { updateTicketStatus } from "../controller/tickets/updateTicketStatus.js";
import { deleteTicket } from "../controller/tickets/deleteTicket.js";

export const tickets = [
    {
        method: "POST",
        path: "/tickets",
        controller: createTicket,
    },
    {
        method: "GET",
        path: "/tickets",
        controller: getTicket,
    },
    {
        method: "PUT",
        path: "/tickets",
        controller: updateTicket,
    },
    {
        method: "PATCH",
        path: "/tickets",
        controller: updateTicketStatus,
    },
    {
        method: "DELETE",
        path: "/tickets",
        controller: deleteTicket,
    },
];
