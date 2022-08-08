export const generateRandInt = (min = 1, max = 100) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export default (arrayLength = 3, randomIntMax = 100) => {
  const randomIntsArray = [];

  for (let i = 0; i < arrayLength; i += 1) {
    // '+ 1' to avoid 'randomInt === 0'
    const randomInt = generateRandInt(1, randomIntMax);
    randomIntsArray.push(randomInt);
  }
  return randomIntsArray;
};
