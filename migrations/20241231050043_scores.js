/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('scores', (table) => {
    table.uuid('game_id').references('id').inTable('games');
    table.uuid('player_name').references('username').inTable('users');
    table.bigInt('score');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('scores');
};
