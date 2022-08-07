import startGameEngine from '../index.js';
import randomIntsArray from '../randomInts.js';

const GREETING = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const ROUNDS_COUNT = 3;
const expressions = randomIntsArray(ROUNDS_COUNT);

const correctAnswer = [];

const isNumberPrime = (expression) => {
  for (let divider = 2; divider <= Math.ceil(expression / 2); divider += 1) {
    if (expression % divider === 0 && expression !== divider) {
      correctAnswer.push('no');
      break;
    } else if (divider === Math.ceil(expression / 2)) {
      correctAnswer.push('yes');
    }
  }
};

for (let i = 0; i < expressions.length; i += 1) {
  if (expressions[i] < 2) {
    correctAnswer.push('no');
  } else if (expressions[i] % 2 === 0) {
    if (expressions[i] === 2) {
      correctAnswer.push('yes');
    } else {
      correctAnswer.push('no');
    }
  } else {
    isNumberPrime(expressions[i]);
  }
}

export default () => startGameEngine(GREETING, expressions, correctAnswer, ROUNDS_COUNT);
