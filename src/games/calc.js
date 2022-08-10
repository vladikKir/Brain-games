import startGameEngine from '../index.js';
import generateRandInt from '../randomInts.js';

const RULE = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return (String(number1 + number2));
    case '-':
      return (String(number1 - number2));
    case '*':
      return (String(number1 * number2));
    default:
      throw new Error('Error, symbol is undefined');
  }
};

const operators = ['+', '-', '*'];

const makeCalcRound = () => {
  const operatorRand = generateRandInt(0, operators.length - 1);
  const operator = operators[operatorRand];

  const number1 = generateRandInt();
  const number2 = generateRandInt();

  const question = (`${number1} ${operator} ${number2}`);
  const correctAnswer = calculate(number1, number2, operator);

  return [question, correctAnswer];
};

export default () => startGameEngine(RULE, makeCalcRound);
