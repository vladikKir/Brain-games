import startGameEngine from '../index.js';
import randomIntsArray from '../randomInts.js';

const greeting = 'What is the result of the expression?';

const numbers1 = randomIntsArray();
const numbers2 = randomIntsArray();
const operators = ['+', '-', '*'];

const expressions = [];
const correctAnswer = [];

for (let i = 0; i < numbers1.length; i += 1) {
  const operatorRand = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorRand];

  if (operator === '+') {
    expressions.push(`${numbers1[i]} + ${numbers2[i]}`);
    correctAnswer.push(String(numbers1[i] + numbers2[i]));
  } else if (operator === '-') {
    expressions.push(`${numbers1[i]} - ${numbers2[i]}`);
    correctAnswer.push(String(numbers1[i] - numbers2[i]));
  } else {
    expressions.push(`${numbers1[i]} * ${numbers2[i]}`);
    correctAnswer.push(String(numbers1[i] * numbers2[i]));
  }
}

export default () => startGameEngine(greeting, expressions, correctAnswer);
