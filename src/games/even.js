import startGameEngine from '../index.js';
import randomIntsArray from '../randomInts.js';

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameRoundsCount = 3;
const expressions = randomIntsArray(gameRoundsCount);
const correctAnswer = [];

for (let i = 0; i < expressions.length; i += 1) {
  if (expressions[i] % 2 === 0) {
    correctAnswer.push('yes');
  } else {
    correctAnswer.push('no');
  }
}

export default () => startGameEngine(greeting, expressions, correctAnswer);
