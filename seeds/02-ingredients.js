exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        {ingredient_name: 'sauce', id: 1},
        {ingredient_name: 'cheese', id: 2},
        {ingredient_name: 'dough', id: 3},
        {ingredient_name: 'bread', id: 4},
        {ingredient_name: 'butter', id: 5}
    ])
}