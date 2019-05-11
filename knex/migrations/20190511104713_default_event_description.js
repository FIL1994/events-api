exports.up = function(knex, Promise) {
  return knex.schema.alterTable("events", table => {
    table
      .string("description")
      .defaultTo("")
      .alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable("events", table => {
    table.string("description").alter();
  });
};
