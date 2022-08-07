import startGameEngine from '../index.js';
import randomIntsArray from '../randomInts.js';

const GREETING = 'Answer "yes" if the number is even, otherwise answer "no".';
const ROUNDS_COUNT = 3;
const expressions = randomIntsArray(ROUNDS_COUNT);
const correctAnswer = [];

for (let i = 0; i < expressions.length; i += 1) {
  if (expressions[i] % 2 === 0) {
    correctAnswer.push('yes');
  } else {
    correctAnswer.push('no');
  }
}

export default () => startGameEngine(GREETING, expressions, correctAnswer, ROUNDS_COUNT);
