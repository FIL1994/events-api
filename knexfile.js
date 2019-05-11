module.exports = {
  client: "postgresql",
  connection: {
    host: "localhost",
    user: "postgres",
    database: "postgres",
    port: 5432
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: __dirname + "/knex/migrations",
    tableName: "knex_migrations",
    extension: "js"
  },
  seeds: {
    directory: __dirname + "/knex/seeds"
  }
};
