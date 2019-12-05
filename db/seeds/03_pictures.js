
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales_pictures').del()
    .then(function () {
      // Inserts seed entries
      return knex("sales_pictures").insert([
        {
          sale_id: 6,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 38,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 29,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 40,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 32,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 9,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 13,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 17,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 6,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 30,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 14,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 39,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 45,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 45,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 26,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 9,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 12,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 7,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 1,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 16,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 30,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 1,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 23,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 35,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 8,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 17,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 45,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 29,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 26,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 24,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 48,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 35,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 49,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 22,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 48,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 27,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 20,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 6,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 4,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 49,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 12,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 49,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 11,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 30,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 37,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 6,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 32,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 18,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 6,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 3,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 49,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 30,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 47,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 4,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 31,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 4,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 16,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 20,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 44,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 34,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 1,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 29,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 7,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 6,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 43,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 50,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 28,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 15,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 25,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 24,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 13,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 19,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 28,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 5,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 25,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 39,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 6,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 32,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 30,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 5,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 10,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 31,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 37,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 13,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 22,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 46,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 41,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 3,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 21,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 4,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 10,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 31,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 24,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 2,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 6,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 4,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 29,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 1,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 31,
          pic: "http://placehold.it/32x32"
        },
        {
          sale_id: 21,
          pic: "http://placehold.it/32x32"
        }
      ]);
    });
};
