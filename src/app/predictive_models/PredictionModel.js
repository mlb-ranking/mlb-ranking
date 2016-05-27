// import Player from './../models/Player';

/**
 * Base Class that all prediction models should inherit from
 * 
 */
export class PredictionModel {

  /**
   * All models will maintain a set of players
   * @param  {Array}  players
   */
  constructor(players = []) {
    this.players = [];
    this.playersMap = new Map();
    this.results = {};

    if (players.length) {
      this.players = players;
    }
  }

  /**
   * Add a player to this model
   * @param {Player} player
   * @return {PredictionModel}
   */
  addPlayer(player) {
    this.players.push(player);
    this.playersMap.set(player.id, player);
    return this;
  }

  /**
   * Return a player from the hashMap based on playerID
   * @param  {Integer} playerID
   * @return {Player}
   */
  getPlayer(playerID) {
    return this.playersMap.get(playerID);
  }

  /**
   * Interface to implement
   * @return {PredictionModel}
   */
  compute() {
    return this;
  }
}
