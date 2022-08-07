import readlineSync from 'readline-sync';

export default (GREETING, expressions, correctAnswers, ROUNDS_COUNT = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(GREETING);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    console.log(`Question: ${expressions[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswers[i]) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswers[i]}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
