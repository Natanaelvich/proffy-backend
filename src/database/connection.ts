import Knex from "knex";

const db = Knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "12345",
    database: "proffy",
  },
});

export default db;
