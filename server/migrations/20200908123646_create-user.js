exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments();
    table.text('name');
    table.text('email');
    table.integer('age');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
