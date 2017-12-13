
exports.up = function(knex, Promise) {
  return knex.schema.createTable('requests', function(table){
    table.increments();
    table.string('description');
    table.string('photo');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('requests');
};
