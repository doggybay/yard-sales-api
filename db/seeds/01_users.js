
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: "Woods",
          last_name: "Rojas",
          email: "woodsrojas@exerta.com",
          password: "reprehenderit"
        },
        {
          first_name: "Turner",
          last_name: "Guy",
          email: "turnerguy@exerta.com",
          password: "occaecat"
        },
        {
          first_name: "Maureen",
          last_name: "Whitney",
          email: "maureenwhitney@exerta.com",
          password: "do"
        },
        {
          first_name: "Frye",
          last_name: "Conner",
          email: "fryeconner@exerta.com",
          password: "anim"
        },
        {
          first_name: "Anita",
          last_name: "Matthews",
          email: "anitamatthews@exerta.com",
          password: "officia"
        },
        {
          first_name: "Jarvis",
          last_name: "Roth",
          email: "jarvisroth@exerta.com",
          password: "in"
        },
        {
          first_name: "Lula",
          last_name: "Weaver",
          email: "lulaweaver@exerta.com",
          password: "exercitation"
        },
        {
          first_name: "Carolyn",
          last_name: "Michael",
          email: "carolynmichael@exerta.com",
          password: "eu"
        },
        {
          first_name: "Diann",
          last_name: "Aguirre",
          email: "diannaguirre@exerta.com",
          password: "dolor"
        },
        {
          first_name: "Tara",
          last_name: "Mcdonald",
          email: "taramcdonald@exerta.com",
          password: "ea"
        }
      ]);
    });
};
