import gameEngine from '../src/index.js';
import randomIntsArray from '../src/randomInts.js';

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const expressions = randomIntsArray();
const correctAnswer = [];

for (const number of expressions) {
  let devidersCount = 0;

  for (let devider = 2; devider <= number / 2; devider += 1) {
    if (number % devider === 0) {
      devidersCount += 1;
    }
  }
  devidersCount === 0 && number !== 1 ? correctAnswer.push('yes') : correctAnswer.push('no');
}

export default () => gameEngine(greeting, expressions, correctAnswer);
