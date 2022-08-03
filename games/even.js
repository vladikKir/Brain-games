import gameEngine from '../src/index.js';

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';
const expression1 = Math.ceil(Math.random() * 100);
const expression2 = Math.ceil(Math.random() * 100);
const expression3 = Math.ceil(Math.random() * 100);

const expressions = [expression1, expression2, expression3];

const correctAnswer = [];

for (const i of expressions) {
  i % 2 === 0 ? correctAnswer.push('yes') : correctAnswer.push('no');
}

export default () => gameEngine(greeting, expressions, correctAnswer);
