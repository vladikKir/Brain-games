import startGameEngine from '../index.js';
import randomIntsArray from '../randomInts.js';

const GREETING = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const ROUNDS_COUNT = 3;
const expressions = randomIntsArray(ROUNDS_COUNT);

const correctAnswer = [];

const isNumberPrime = (expression) => {
  for (let divider = 2; divider <= Math.ceil(expression / 2); divider += 1) {
    if (expression % divider === 0 && expression !== divider) {
      return false;
    } if (divider === Math.ceil(expression / 2)) {
      return true;
    }
  }
  return false;
};

for (let i = 0; i < expressions.length; i += 1) {
  let answer;
  if (expressions[i] % 2 === 0) {
    if (expressions[i] === 2) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
  } else {
    answer = isNumberPrime(expressions[i]) ? 'yes' : 'no';
  }
  correctAnswer.push(answer);
}

export default () => startGameEngine(GREETING, expressions, correctAnswer, ROUNDS_COUNT);
