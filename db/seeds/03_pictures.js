
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pictures').del()
    .then(function () {
      // Inserts seed entries
      return knex("pictures").insert([
        {
          sale_id: 22,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 26,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 49,
          pic: "https://loremflickr.com/320/240/desk"
        },
        {
          sale_id: 23,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 14,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 32,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 18,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 3,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 12,
          pic: "https://loremflickr.com/320/240/cloths"
        },
        {
          sale_id: 16,
          pic: "https://loremflickr.com/320/240/chair"
        },
        {
          sale_id: 34,
          pic: "https://loremflickr.com/320/240/desk"
        },
        {
          sale_id: 34,
          pic: "https://loremflickr.com/320/240/computer"
        },
        {
          sale_id: 4,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 7,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 20,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 11,
          pic: "https://loremflickr.com/320/240/cloths"
        },
        {
          sale_id: 12,
          pic: "https://loremflickr.com/320/240/chair"
        },
        {
          sale_id: 18,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 21,
          pic: "https://loremflickr.com/320/240/desk"
        },
        {
          sale_id: 15,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 23,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 44,
          pic: "https://loremflickr.com/320/240/desk"
        },
        {
          sale_id: 28,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 15,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 38,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 7,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 47,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 1,
          pic: "https://loremflickr.com/320/240/chair"
        },
        {
          sale_id: 17,
          pic: "https://loremflickr.com/320/240/desk"
        },
        {
          sale_id: 25,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 16,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 24,
          pic: "https://loremflickr.com/320/240/chair"
        },
        {
          sale_id: 28,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 40,
          pic: "https://loremflickr.com/320/240/chair"
        },
        {
          sale_id: 36,
          pic: "https://loremflickr.com/320/240/chair"
        },
        {
          sale_id: 50,
          pic: "https://loremflickr.com/320/240/cloths"
        },
        {
          sale_id: 28,
          pic: "https://loremflickr.com/320/240/chair"
        },
        {
          sale_id: 34,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 1,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 49,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 15,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 2,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 10,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 16,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 2,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 47,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 1,
          pic: "https://loremflickr.com/320/240/cloths"
        },
        {
          sale_id: 5,
          pic: "https://loremflickr.com/320/240/chair"
        },
        {
          sale_id: 19,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 26,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 35,
          pic: "https://loremflickr.com/320/240/cloths"
        },
        {
          sale_id: 21,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 49,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 47,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 29,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 38,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 31,
          pic: "https://loremflickr.com/320/240/computer"
        },
        {
          sale_id: 30,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 24,
          pic: "https://loremflickr.com/320/240/desk"
        },
        {
          sale_id: 11,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 35,
          pic: "https://loremflickr.com/320/240/computer"
        },
        {
          sale_id: 16,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 49,
          pic: "https://loremflickr.com/320/240/computer"
        },
        {
          sale_id: 46,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 19,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 31,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 1,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 45,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 41,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 20,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 1,
          pic: "https://loremflickr.com/320/240/desk"
        },
        {
          sale_id: 5,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 21,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 16,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 16,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 25,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 36,
          pic: "https://loremflickr.com/320/240/computer"
        },
        {
          sale_id: 38,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 18,
          pic: "https://loremflickr.com/320/240/desk"
        },
        {
          sale_id: 43,
          pic: "https://loremflickr.com/320/240/desk"
        },
        {
          sale_id: 46,
          pic: "https://loremflickr.com/320/240/chair"
        },
        {
          sale_id: 31,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 12,
          pic: "https://loremflickr.com/320/240/chair"
        },
        {
          sale_id: 1,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 47,
          pic: "https://loremflickr.com/320/240/cloths"
        },
        {
          sale_id: 20,
          pic: "https://loremflickr.com/320/240/computer"
        },
        {
          sale_id: 33,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 29,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 14,
          pic: "https://loremflickr.com/320/240/cloths"
        },
        {
          sale_id: 35,
          pic: "https://loremflickr.com/320/240/desk"
        },
        {
          sale_id: 10,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 28,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 49,
          pic: "https://loremflickr.com/320/240/toy"
        },
        {
          sale_id: 16,
          pic: "https://loremflickr.com/320/240/bed"
        },
        {
          sale_id: 27,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 18,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 35,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 39,
          pic: "https://loremflickr.com/320/240/furniture"
        },
        {
          sale_id: 25,
          pic: "https://loremflickr.com/320/240/house"
        },
        {
          sale_id: 6,
          pic: "https://loremflickr.com/320/240/bed"
        }
      ]);
    });
};

