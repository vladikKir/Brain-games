import startGameEngine from '../index.js';

const greeting = 'What number is missing in the progression?';

const expressions = [];
const correctAnswers = [];

const gameRoundsCount = 3;

const randomIntsArray = () => {
  const minProgressionLength = 5;
  const progressionLength = Math.round(Math.random() * minProgressionLength) + minProgressionLength;
  const progressionFirstNumber = Math.round(Math.random() * 10);
  const progressionStep = Math.ceil(Math.random() * 10);

  let progressionNumber = progressionFirstNumber;
  let progressionArray = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    progressionArray.push(progressionNumber);
    progressionNumber += progressionStep;
  }

  // '-0.1' to avoid cases (numberHidden === undefined)
  const numberHidden = Math.floor(Math.random() * progressionLength - 0.1);
  correctAnswers.push(String(progressionArray[numberHidden]));
  progressionArray[numberHidden] = '..';
  progressionArray = progressionArray.join(' ');
  expressions.push(progressionArray);
};

while (expressions.length < gameRoundsCount) {
  randomIntsArray();
}

export default () => startGameEngine(greeting, expressions, correctAnswers);
