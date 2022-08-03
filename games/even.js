import gameEngine from '../src/index.js';
import randomIntsArray from '../src/randomInts.js'

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const expressions = randomIntsArray();

const correctAnswer = [];

for (const i of expressions) {
  i % 2 === 0 ? correctAnswer.push('yes') : correctAnswer.push('no');
}

export default () => gameEngine(greeting, expressions, correctAnswer);
