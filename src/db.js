module.exports = require("knex")({
  client: "pg",
  connection: {
    host: "db",
    user: "postgres",
    database: "postgres",
    port: 5432
  },
  searchPath: ["knex", "public"]
});
