import startGameEngine from '../index.js';
import { generateRandInt } from '../randomInts.js';

const GREETING = 'What number is missing in the progression?';

const ROUNDS_COUNT = 3;
const MIN_PROGR_LENGTH = 5;
const MAX_PROGR_LENGTH = 10;

const makeRandomArray = () => {
  const progressionLength = generateRandInt(MIN_PROGR_LENGTH, MAX_PROGR_LENGTH);
  const progressionFirstNumber = generateRandInt(1, 10);
  const progressionStep = generateRandInt(1, 10);

  let progressionNumber = progressionFirstNumber;
  const randomArray = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    randomArray.push(progressionNumber);
    progressionNumber += progressionStep;
  }
  return randomArray;
};

const hideRandomNumber = () => {
  const expressions = [];
  const correctAnswers = [];

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    let progressionArray = makeRandomArray();
    // '1' to avoid cases (numberHidden === undefined)
    const numberHidden = generateRandInt(0, progressionArray.length - 1);
    correctAnswers.push(String(progressionArray[numberHidden]));
    progressionArray[numberHidden] = '..';
    progressionArray = progressionArray.join(' ');
    expressions.push(progressionArray);
  }
  return [expressions, correctAnswers];
};
const readyProgressionArray = hideRandomNumber();
const [expressions, correctAnswers] = [readyProgressionArray[0], readyProgressionArray[1]];

export default () => startGameEngine(GREETING, expressions, correctAnswers, ROUNDS_COUNT);