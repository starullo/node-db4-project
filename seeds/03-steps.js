exports.seed = function(knex, Promise) {
    return knex('steps').insert([
        {id: 1, step_info: 'get dough', recipe_id: 1, sequence_number: 1},
        {id: 2, step_info: 'Put sauce on dough', recipe_id: 1, sequence_number: 2},
        {id: 3, step_info: 'Put cheese on dough', recipe_id: 1, sequence_number: 3},
        {id: 4, step_info: 'Put pizza in oven', recipe_id: 1, sequence_number: 4},
        {id: 5, step_info: 'get bread', recipe_id: 2, sequence_number: 1},
        {id: 6, step_info: 'put butter on bread', recipe_id: 2, sequence_number: 2},
        {id: 7, step_info: 'put cheese on bread', recipe_id: 2, sequence_number: 3},
        {id: 8, step_info: 'put sandweeeech in pan and heat until done', recipe_id: 2, sequence_number: 4}
    ])
}