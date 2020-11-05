exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        {recipe_name: 'pizza', id: 1},
        {recipe_name: 'grilled cheese', id: 2}
    ])
}