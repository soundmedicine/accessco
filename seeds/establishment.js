
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "establishment"; ALTER SEQUENCE establishment_id_seq RESTART WITH 2;')
    .then(function () {
      let establishments = [{
        id: 1,
        name: 'Iron Mountain Hot Springs',
        type: 'hot spring',
        city: 'Glenwood Springs, CO',
        wheelchair: 0,
        blind: 3,
        deaf: 4,
        comments: 'Beautiful location and easy to get to, but no wheelchair access!'
      }, {
        id: 2,
        name: 'Outer Range Brewing Co.',
        type: 'brewery',
        city: 'Frisco, CO',
        wheelchair: 5,
        blind: 2,
        deaf: 4,
        comments: 'Beautiful location and easy to get to, but no wheelchair access!'
      }]
      return knex('establishment').insert(establishments);
    })
}