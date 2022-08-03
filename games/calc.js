import gameEngine from '../src/index.js';

const greeting = 'What is the result of the expression?';

// operands
const numbers1 = [Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50)];
const numbers2 = [Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50)];

// operator

const expressions = [];
const correctAnswer = [];

for (let i = 0; i < numbers1.length; i += 1) {
  const operator = Math.random();

  if (operator <= 0.33) {
    expressions.push(`${numbers1[i]} + ${numbers2[i]}`);
    correctAnswer.push(String(numbers1[i] + numbers2[i]));
  } else if (operator > 0.33 && operator <= 0.66) {
    expressions.push(`${numbers1[i]} - ${numbers2[i]}`);
    correctAnswer.push(String(numbers1[i] - numbers2[i]));
  } else {
    expressions.push(`${numbers1[i]} * ${numbers2[i]}`);
    correctAnswer.push(String(numbers1[i] * numbers2[i]));
  }
}

export default () => gameEngine(greeting, expressions, correctAnswer);
