import startGameEngine from '../index.js';
import generateRandInt from '../randomInt.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (expression) => {
  if (expression < 2 || (expression % 2 === 0 && expression !== 2)) {
    return false;
  }
  for (let divider = 2; divider <= Math.ceil(expression / 2); divider += 1) {
    if (expression % divider === 0 && expression !== divider) {
      return false;
    }
  }
  return true;
};

const makePrimeRound = () => {
  const question = generateRandInt();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGameEngine(RULE, makePrimeRound);
