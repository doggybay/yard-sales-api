
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pictures').del()
    .then(function () {
      // Inserts seed entries
      return knex("pictures").insert([
  {
    "sale_id": 37,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 9,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 48,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 30,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 20,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 34,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 18,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 42,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 9,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 24,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 25,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 5,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 16,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 10,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 15,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 38,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 29,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 7,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 35,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 25,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 17,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 25,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 12,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 11,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 9,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 31,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 37,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 41,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 2,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 6,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 31,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 26,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 13,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 20,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 5,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 39,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 43,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 35,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 17,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 27,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 4,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 34,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 7,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 4,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 35,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 30,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 26,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 31,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 10,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 47,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 4,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 5,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 38,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 13,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 32,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 13,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 10,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 45,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 19,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 21,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 8,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 9,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 8,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 6,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 14,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 12,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 36,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 34,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 23,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 26,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 38,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 42,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 38,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 47,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 29,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 9,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 11,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 45,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 10,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 48,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 8,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 50,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 37,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 49,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 10,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 6,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 7,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 44,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 16,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 15,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 34,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 35,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 44,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 45,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 38,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 41,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 43,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 14,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 39,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 27,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 26,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 31,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 33,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 46,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 36,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 40,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 38,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 24,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 28,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 27,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 24,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 5,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 30,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 30,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 44,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 46,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 31,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 9,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 11,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 43,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 39,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 44,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 44,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 15,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 47,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 17,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 21,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 18,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 38,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 46,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 2,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 7,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 18,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 4,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 46,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 32,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 15,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 6,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 40,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 30,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 6,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 5,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 18,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 41,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 11,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 46,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 26,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 23,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 46,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 33,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 2,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 29,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 47,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 22,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 22,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 36,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 20,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 44,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 20,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 5,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 34,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 6,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 13,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 34,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 9,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 41,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 24,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 31,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 29,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 48,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 6,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 34,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 7,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 26,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 18,
    "pic": "http://placeimg.com/320/240/any"
  },
  {
    "sale_id": 39,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 31,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 50,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 47,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 45,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 15,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 47,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 18,
    "pic": "http://lorempixel.com/320/240/abstract"
  },
  {
    "sale_id": 38,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 5,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 27,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 37,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 50,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 23,
    "pic": "http://placeimg.com/320/240"
  },
  {
    "sale_id": 17,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 7,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 32,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 31,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 15,
    "pic": "https://loremflickr.com/320/240"
  },
  {
    "sale_id": 29,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 40,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 3,
    "pic": "https://placebear.com/640/360"
  },
  {
    "sale_id": 50,
    "pic": "http://lorempixel.com/320/240"
  },
  {
    "sale_id": 15,
    "pic": "http://placeimg.com/320/240/arch"
  },
  {
    "sale_id": 6,
    "pic": "http://placeimg.com/320/240"
  }
]);
    });
};

