import startGameEngine from '../index.js';
import generateRandInt from '../randomInt.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeEvenRound = () => {
  const question = generateRandInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGameEngine(RULE, makeEvenRound);
