import { Character } from './domain.js';
export { GameSavingData, readGameSaving, writeGameSaving } from './game.js';

export default class Game {
    start() {
      console.log('game started');
    }
  }
  
export class GameSavingData {
}
  
function readGameSaving() {
}
  
function writeGameSaving() {
}

// const defaultGame = new Game();
// export default defaultGame
