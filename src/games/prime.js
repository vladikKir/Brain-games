import startGameEngine from '../index.js';
import randomIntsArray from '../randomInts.js';

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameRoundsCount = 3;
const expressions = randomIntsArray(gameRoundsCount);
const correctAnswer = [];

for (let i = 0; i < expressions.length;) {
  for (let devider = 2; devider <= expressions[i] / 2; devider += 1) {
    if (expressions[i] % devider === 0 && expressions[i] !== devider) {
      correctAnswer.push('no');
      i += 1;
      devider = 2;
    } else {
      correctAnswer.push('yes');
      i += 1;
    }
  }
}

export default () => startGameEngine(greeting, expressions, correctAnswer);
