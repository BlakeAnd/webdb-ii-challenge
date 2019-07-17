
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.decimal('VIN').unique().notNullable();
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.decimal('mileage').notNullable();
    tbl.string('transmissionType', 128);
    tbl.string('titleStatus', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};  
