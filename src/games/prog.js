import startGameEngine from '../index.js';
import generateRandInt from '../randomInt.js';

const RULE = 'What number is missing in the progression?';

const [MIN_PROGR_LENGTH, MAX_PROGR_LENGTH] = [5, 10];
const [MIN_FIRST_NUMBER, MAX_FIRST_NUMBER] = [1, 10];
const [MIN_STEP, MAX_STEP] = [1, 10];

const makeProgression = (length, firstNumber, step) => {
  const progression = [];

  for (let i = 1; i <= length; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};

const makeProgressionRound = () => {
  const progLength = generateRandInt(MIN_PROGR_LENGTH, MAX_PROGR_LENGTH);
  const progFirstNumber = generateRandInt(MIN_FIRST_NUMBER, MAX_FIRST_NUMBER);
  const progStep = generateRandInt(MIN_STEP, MAX_STEP);

  const progressionArray = makeProgression(progLength, progFirstNumber, progStep);
  const numberHiddenIndex = generateRandInt(0, progressionArray.length - 1);

  const correctAnswer = (String(progressionArray[numberHiddenIndex]));

  progressionArray[numberHiddenIndex] = '..';
  const question = (progressionArray.join(' '));

  return [question, correctAnswer];
};

export default () => startGameEngine(RULE, makeProgressionRound);
