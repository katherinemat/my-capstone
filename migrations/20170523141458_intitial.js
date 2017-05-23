
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('username');
            table.string('password')
                 .notNullable();
            table.string('name');
            table.string('email')
                 .notNullable()
                 .unique();
        }),

        knex.schema.createTable('users_stories', function(table) {
          table.increments('id').primary();
          table.integer('user_id')
               .references('id')
               .inTable('users');
          table.integer('story_id')
               .references('id')
               .inTable('stories');
        }),

        knex.schema.createTable('stories', function(table){
            table.increments('id').primary();
            table.string('title');
            table.string('author');
            table.date('date');
            table.string('content');
        })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('users_stories'),
        knex.schema.dropTable('stories')
    ])
};
