import gameEngine from '../src/index.js';
import randomIntsArray from '../src/randomInts.js'

const greeting = 'What is the result of the expression?';

const numbers1 = randomIntsArray();
const numbers2 = randomIntsArray();

const expressions = [];
const correctAnswer = [];

for (let i = 0; i < numbers1.length; i += 1) {
  const operator = Math.random();

  if (operator <= 0.33) {
    expressions.push(`${numbers1[i]} + ${numbers2[i]}`);
    correctAnswer.push(numbers1[i] + numbers2[i]);
  } else if (operator > 0.33 && operator <= 0.66) {
    expressions.push(`${numbers1[i]} - ${numbers2[i]}`);
    correctAnswer.push(numbers1[i] - numbers2[i]);
  } else {
    expressions.push(`${numbers1[i]} * ${numbers2[i]}`);
    correctAnswer.push(numbers1[i] * numbers2[i]);
  }
}

export default () => gameEngine(greeting, expressions, correctAnswer);
