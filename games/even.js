import { gameEngine} from "../src/index.js";

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".'
const expression1 = Math.round(Math.random() * 100) + 1;
const expression2 = Math.round(Math.random() * 100) + 1;
const expression3 = Math.round(Math.random() * 100) + 1;

const expressions = [expression1, expression2, expression3]

const correctAnswer = [];


  for (let i of expressions) {
  i % 2 === 0 ? correctAnswer.push('yes') : correctAnswer.push('no')
  }



export const evenGame = () => gameEngine(greeting, expressions, correctAnswer);
