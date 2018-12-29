
exports.up = function(knex, Promise) {
    return knex.schema.createTable('establishment', table => {
        table.increments('id').primary()
        table.text('name')
        table.text('type of establishment')
        table.text('city')
        table.integer('wheelchair accessibility rating')
        table.integer('blind accessibility rating')
        table.integer('deaf accessibility rating')
        table.text('comments')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('establishment')
    
  };
  