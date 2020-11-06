
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('recipes', tbl=>{
      tbl.increments()
      tbl.string('recipe_name', 128).notNullable()
  })
  .createTable('ingredients', tbl=>{
      tbl.increments()
      tbl.string('ingredient_name', 128)
      .notNullable()
  })
  .createTable('steps', tbl=>{
      tbl.increments()
      tbl.string('step_info', 128)
      .notNullable()
      tbl.integer('sequence_number').notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('ingredient_steps', tbl=>{
      tbl.increments()
      tbl.text('quantity', 128).notNullable()
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('steps')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('ingredient_steps')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
