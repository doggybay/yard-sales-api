
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales_pictures').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales_pictures').insert([
        {
          sale_id: 41,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 1,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 6,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 25,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 21,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 3,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 37,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 4,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 43,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 33,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 2,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 19,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 25,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 22,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 43,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 18,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 33,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 28,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 13,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 22,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 30,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 46,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 22,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 3,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 48,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 36,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 25,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 42,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 37,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 20,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 50,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 41,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 39,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 29,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 17,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 42,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 32,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 21,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 30,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 13,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 13,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 37,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 26,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 45,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 24,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 37,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 38,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 49,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 24,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 12,
          main_pic: "http://placehold.it/32x32",
          first_pic: "http://placehold.it/32x32",
          second_pic: "http://placehold.it/32x32",
          third_pic: "http://placehold.it/32x32",
          fourth_pic: "http://placehold.it/32x32",
          fifth_pic: "http://placehold.it/32x32"
        }
      ]);
    });
};
