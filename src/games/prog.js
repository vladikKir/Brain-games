import startGameEngine from '../index.js';
import generateRandInt from '../randomInts.js';

const RULE = 'What number is missing in the progression?';

const [MIN_PROGR_LENGTH, MAX_PROGR_LENGTH] = [5, 10];
const [MIN_FIRST_NUMBER, MAX_FIRST_NUMBER] = [1, 10];
const [MIN_STEP, MAX_STEP] = [1, 10];

const makeProgression = () => {
  const progressionLength = generateRandInt(MIN_PROGR_LENGTH, MAX_PROGR_LENGTH);
  const progressionFirstNumber = generateRandInt(MIN_FIRST_NUMBER, MAX_FIRST_NUMBER);
  const progressionStep = generateRandInt(MIN_STEP, MAX_STEP);

  let progressionNumber = progressionFirstNumber;
  const progression = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += progressionStep;
  }
  return progression;
};

const makeProgressionRound = () => {
  const progressionArray = makeProgression();
  const numberHiddenIndex = generateRandInt(0, progressionArray.length - 1);

  const correctAnswer = (String(progressionArray[numberHiddenIndex]));

  progressionArray[numberHiddenIndex] = '..';
  const question = (progressionArray.join(' '));

  return [question, correctAnswer];
};

export default () => startGameEngine(RULE, makeProgressionRound);
