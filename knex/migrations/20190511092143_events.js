exports.up = knex => {
  return knex.schema.createTable("events", table => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description");
    table.date("start_date").defaultTo(knex.fn.now());
    table.time("start_time").defaultTo(knex.fn.now());
    table.date("end_date").defaultTo(knex.fn.now());
    table.time("end_time").defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTable("events");
};
