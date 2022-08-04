import gameEngine from '../src/index.js';

const greeting = 'What number is missing in the progression?';

const expressions = [];
const correctAnswers = [];

for (let i = 0; i < 3; i += 1) {
  const progressionLength = Math.round((Math.random() + 1) * 5);
  const progressionFirstNumber = Math.round(Math.random() * 10);
  const progressionStep = Math.ceil((Math.random() + Math.random()) * 7);

  let progressionNumber = progressionFirstNumber;
  let preogressionArray = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    progressionNumber += progressionStep;
    preogressionArray.push(progressionNumber);
  }
  const numberHidden = Math.floor(Math.random() * progressionLength - 0.1);
  correctAnswers.push(preogressionArray[numberHidden]);
  preogressionArray[numberHidden] = '..';
  preogressionArray = preogressionArray.join(' ');
  expressions.push(preogressionArray);
}

export default () => gameEngine(greeting, expressions, correctAnswers);
