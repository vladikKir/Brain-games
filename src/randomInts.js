export default (arrayLength = 3) => {
  const randomIntsArray = [];
  const randomIntMax = 100;

  for (let i = 0; i < arrayLength; i += 1) {
    // '+ 1' to avoid 'randomInt === 0'
    const randomInt = Math.ceil(Math.random() * randomIntMax) + 1;
    randomIntsArray.push(randomInt);
  }
  return randomIntsArray;
};

export const generateRandInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
