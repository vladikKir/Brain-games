import gameEngine from '../src/index.js';

const greeting = 'Find the greatest common divisor of given numbers.';

const numbers1 = [Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)];
const numbers2 = [Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)];

const expressions = [];

for (let i = 0; i < numbers1.length; i += 1) {
  expressions.push(`${numbers1[i]} ${numbers2[i]}`);
}

const correctAnswer = [];
let greatestDevider;

for (let i = 0; i < numbers1.length; i += 1) {
  for (let devider = 1; devider <= numbers1[i] && devider <= numbers2[i]; devider += 1) {
    if (numbers1[i] % devider === 0 && numbers2[i] % devider === 0) {
      greatestDevider = devider;
    }
  }
  correctAnswer.push(greatestDevider);
}

export default () => gameEngine(greeting, expressions, correctAnswer);
