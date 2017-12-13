
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {"name": 'nifty pants', "photo": 'niftyphoto', "sizes": "small, med, large", "description": "these are really cool", "price": 10.99, "commission": 1.99, "on_sale": true, "limited_time": false, "handmade": false, "ethical": true}
      ]);
    });
};
