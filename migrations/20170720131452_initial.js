
exports.up = function(knex, Promise) {
  return knex.schema.createTable('test', (table) => {
    table.increments();
    table
      .string('test_column_1')
    table
      .integer('test_column_2')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('test');
};
