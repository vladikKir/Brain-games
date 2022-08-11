import startGameEngine from '../index.js';
import generateRandInt from '../randomInt.js';

const RULE = 'Find the greatest common divisor of given numbers.';

const findGreatestDivider = (number1, number2) => {
  const number = Math.min(number1, number2);
  for (let divider = number; divider > 0; divider -= 1) {
    if (number1 % divider === 0 && number2 % divider === 0) {
      return divider;
    }
  }
  return 1;
};

const makeGcdRound = () => {
  const number1 = generateRandInt();
  const number2 = generateRandInt();

  const question = `${number1} ${number2}`;
  const correctAnswer = findGreatestDivider(number1, number2).toString();

  return [question, correctAnswer];
};

export default () => startGameEngine(RULE, makeGcdRound);
