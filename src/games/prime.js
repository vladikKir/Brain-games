import startGameEngine from '../index.js';
import randomIntsArray from '../randomInts.js';

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameRoundsCount = 3;
const expressions = randomIntsArray(gameRoundsCount);
const correctAnswer = [];

for (let i = 0; i < expressions.length; i += 1) {
  if (expressions[i] < 2) {
    correctAnswer.push('no');
  } else {
    for (let devider = 2; devider <= expressions[i]; devider += 1) {
      if (expressions[i] % devider === 0 && expressions[i] !== devider) {
        correctAnswer.push('no');
        devider = expressions[i] + 1;
      } else if (expressions[i] === devider) {
        correctAnswer.push('yes');
      }
    }
  }
}

export default () => startGameEngine(greeting, expressions, correctAnswer);
