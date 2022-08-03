import readlineSync from 'readline-sync';

export default (greeting, expressions, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(greeting);

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${expressions[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(correctAnswer[i])) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer[i]}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
