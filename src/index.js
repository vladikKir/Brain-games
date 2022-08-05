import readlineSync from 'readline-sync';

export default (greeting, expressions, correctAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(greeting);

  const gameRoundsCount = 3;

  for (let i = 0; i < gameRoundsCount; i += 1) {
    console.log(`Question: ${expressions[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswers[i]) {
      console.log('Correct!');
      if (i === gameRoundsCount - 1) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswers[i]}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
