
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        { "description": 'cool pants', "photo": "coolphoto"},
        { "description": 'cool watch', "photo": "anothercoolphoto"}
      ]);
    });
};
