import startGameEngine from '../index.js';
import randomIntsArray from '../randomInts.js';

const GREETING = 'Find the greatest common divisor of given numbers.';
const ROUNDS_COUNT = 3;
const numbers1 = randomIntsArray(ROUNDS_COUNT);
const numbers2 = randomIntsArray(ROUNDS_COUNT);

const expressions = [];
const correctAnswer = [];

const findGreatestDivider = (number1, number2) => {
  let greatestDivider;
  for (let divider = number1; divider > 0; divider -= 1) {
    if (number1 % divider === 0 && number2 % divider === 0) {
      greatestDivider = divider;
    }
  }
  return greatestDivider;
};

for (let i = 0; i < numbers1.length; i += 1) {
  expressions.push(`${numbers1[i]} ${numbers2[i]}`);
  const greatestDivider = findGreatestDivider(numbers1[i], numbers2[i]);
  correctAnswer.push(String(greatestDivider));
}

export default () => startGameEngine(GREETING, expressions, correctAnswer, ROUNDS_COUNT);
