import startGameEngine from '../index.js';
import randomIntsArray from '../randomInts.js';

const greeting = 'Find the greatest common divisor of given numbers.';

const numbers1 = randomIntsArray();
const numbers2 = randomIntsArray();

const expressions = [];

const correctAnswer = [];
let greatestDevider;

for (let i = 0; i < numbers1.length; i += 1) {
  expressions.push(`${numbers1[i]} ${numbers2[i]}`);

  for (let devider = 1; devider <= numbers1[i] && devider <= numbers2[i]; devider += 1) {
    if (numbers1[i] % devider === 0 && numbers2[i] % devider === 0) {
      greatestDevider = devider;
    }
  }
  correctAnswer.push(String(greatestDevider));
}

export default () => startGameEngine(greeting, expressions, correctAnswer);
