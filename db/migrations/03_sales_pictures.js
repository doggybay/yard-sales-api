
exports.up = function(knex) {
  return knex.schema.createTable('sales_pictures', table => {
    table.increments();
    table.integer('sale_id').references('sales.id').onDelete('CASCADE');
    table.string('pic').notNullable();
    

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sales_pictures');
};
