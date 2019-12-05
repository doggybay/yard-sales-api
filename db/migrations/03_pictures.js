
exports.up = function(knex) {
  return knex.schema.createTable('pictures', table => {
    table.increments();
    table.integer('sale_id').references('sales.id').notNullable().onDelete('CASCADE');
    table.string('pic').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pictures');
};
