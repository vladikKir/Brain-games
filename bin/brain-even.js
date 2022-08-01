#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomInt = () => Math.round(Math.random() * 100) + 1;
const answerRequest = () => readlineSync.question('Your answer: ');

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = randomInt();
    console.log(`Question: ${num}`);
    const answer = answerRequest();

    if ((num % 2 === 0 && answer.toLowerCase() === 'yes') || (num % 2 !== 0 && answer.toLowerCase() === 'no')) {
      console.log('Correct!');
    } else if (num % 2 === 0 && answer.toLowerCase() === 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.)`);
      console.log(`Let's try again, ${name}!`);
      return;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.)`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

brainEven();
