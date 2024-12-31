const db = require('../../../dbconfig');

module.exports = {
  getGames,
  createGames,
};

export interface Game {
  name: string;
  public: boolean;
  players: string[];
}

function getById(id: string) {
  return db('games').where('id', id).first();
}

function createGames(game: Game) {
  return db('games').insert(game);
}

function getGames() {
  return db('games');
}
