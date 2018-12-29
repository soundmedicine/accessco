
exports.up = function(knex, Promise) {
    return knex.schema.createTable('establishment', table => {
        table.increments('id').primary()
        table.text('name')
        table.text('type')
        table.text('city')
        table.integer('wheelchair')
        table.integer('blind')
        table.integer('deaf')
        table.text('comments')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('establishment')
    
  };
  