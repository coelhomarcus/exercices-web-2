import Knex from "knex";
import config from "../../knexfile.ts";

export const knex = Knex(config);