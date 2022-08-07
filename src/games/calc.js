import startGameEngine from '../index.js';
import randomIntsArray, { generateRandInt } from '../randomInts.js';

const GREETING = 'What is the result of the expression?';

const ROUNDS_COUNT = 3;

const numbers1 = randomIntsArray(ROUNDS_COUNT);
const numbers2 = randomIntsArray(ROUNDS_COUNT);
const operators = ['+', '-', '*'];

const expressions = [];
const correctAnswer = [];

for (let i = 0; i < numbers1.length; i += 1) {
  // '-1' to avoid cases (operatorRand === undefined)
  const operatorRand = generateRandInt(0, operators.length - 1);
  const operator = operators[operatorRand];

  expressions.push(`${numbers1[i]} ${operator} ${numbers2[i]}`);
  switch (operator) {
    case '+':
      correctAnswer.push(String(numbers1[i] + numbers2[i]));
      break;
    case '-':
      correctAnswer.push(String(numbers1[i] - numbers2[i]));
      break;
    case '*':
      correctAnswer.push(String(numbers1[i] * numbers2[i]));
      break;
    default:
      break;
  }
}

export default () => startGameEngine(GREETING, expressions, correctAnswer, ROUNDS_COUNT);
