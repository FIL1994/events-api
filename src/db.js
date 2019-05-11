module.exports = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    database: "postgres",
    port: 5432
  },
  searchPath: ["knex", "public"]
});
