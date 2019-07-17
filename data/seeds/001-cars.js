
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate() //delets data and rests primary key
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 21837, make: "subaru", model: "forester", mileage: 9871},
        {VIN: 89737, make: "honda", model: "civic", mileage: 25762},
        {VIN: 25729, make: "chevy", model: "silverado", mileage: 56747}
      ]);
    });
};
