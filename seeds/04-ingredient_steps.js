exports.seed = function(knex, Promise) {
    return knex('ingredient_steps').insert([
        {id: 1, quantity: '.5lb', ingredient_id: 3, step_id: 1},
        {id: 2, quantity: '.25lb', ingredient_id: 2, step_id: 3},
        {id: 3, quantity: '1cup', ingredient_id: 1, step_id: 2},
        {id: 4, quantity: '2 slices', ingredient_id: 4, step_id: 1},
        {id: 5, quantity: 'some', ingredient_id: 5, step_id: 2},
        {id: 6, quantity: '2 slices', ingredient_id: 3, step_id: 3}
    ])};