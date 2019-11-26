
exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.increments();
    table.string('title').notNullable();
    table.text('details').notNullable();
    table.integer('user_id').references('users.id').onDelete('CASCADE');
    table.string('location').notNullable();
    table.datetime('date_time').unique().notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sales')
};
