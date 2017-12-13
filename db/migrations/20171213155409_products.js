
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table){
    table.increments();
    table.string('name');
    table.string('photo');
    table.string('sizes');
    table.string('description');
    table.decimal('price');
    table.decimal('commission');
    table.boolean('on_sale');
    table.boolean('limited_time');
    table.boolean('handmade');
    table.boolean('ethical');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
