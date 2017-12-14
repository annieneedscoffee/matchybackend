
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        { "title":"Black Dress","description": 'I need a splash of color to go with this black dress.', "photo": "https://images.unsplash.com/photo-1497621775992-d6f40284424a?auto=format&fit=crop&w=1051&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
        { "title":"Winter Coat","description": 'I need a hat and gloves to go with this coat.', "photo": "https://images.unsplash.com/photo-1489972536996-943907ea1cd8?auto=format&fit=crop&w=675&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},         { "title":"Striped Suit","description": 'I need shoes to go with this suit.', "photo": "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
                { "title":"Shoes","description": 'I need a purse to go with these shoes', "photo": "https://images.unsplash.com/photo-1493219642556-5084f645ddb4?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},  { "title":"Pink Blouse","description": 'I need a skirt to put with this blouse.', "photo": "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?auto=format&fit=crop&w=980&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"}
      ]);
    });
};
