
exports.up = function(knex) {
  return knex.schema.createTable('sales_pictures', table => {
    table.increments();
    table.integer('sale_id').references('sales.id').onDelete('CASCADE');
    table.string('main_pic').notNullable();
    table.string('first_pic');
    table.string('second_pic');
    table.string('third_pic');
    table.string('fourth_pic');
    table.string('fifth_pic');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sales_pictures');
};
