import startGameEngine from '../index.js';
import randomIntsArray from '../randomInts.js';

const greeting = 'What is the result of the expression?';

const gameRoundsCount = 3;

const numbers1 = randomIntsArray(gameRoundsCount);
const numbers2 = randomIntsArray(gameRoundsCount);
const operators = ['+', '-', '*'];

const expressions = [];
const correctAnswer = [];

for (let i = 0; i < numbers1.length; i += 1) {
  // '-1' to avoid cases (operatorRand === undefined)
  const operatorRand = Math.ceil(Math.random() * (operators.length - 1));
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

export default () => startGameEngine(greeting, expressions, correctAnswer);
