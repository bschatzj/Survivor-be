const { table } = require('console');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('results', (table) => {
    table.int('week');
    table.int('season');
    table.string('player name');
    table.string('eliminated player');
    table.string('episode name');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('results');
};
