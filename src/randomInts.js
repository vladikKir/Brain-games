export default (arrayLength = 3) => {
    const randomIntsArray = [];

    for (let i = 0; i < arrayLength; i += 1){
        const randomInt = Math.ceil(Math.random() * 100);
        randomIntsArray.push(randomInt);
    }
    return randomIntsArray;
};
