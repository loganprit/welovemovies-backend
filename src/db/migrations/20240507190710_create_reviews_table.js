exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("review_id").primary(); // Primary key
    table.text("content");
    table.integer("score");
    table.integer("critic_id").unsigned().notNullable();
    table.integer("movie_id").unsigned().notNullable();
    table.foreign("critic_id").references("critic_id").inTable("critics");
    table.foreign("movie_id").references("movie_id").inTable("movies");
    table.timestamps(true, true); // Adds created_at and updated_at columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};
