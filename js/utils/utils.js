const getRandomInt = (min, max) => {
  if (min >= 0 && max >= 0){
    if (min === max) {
      return max;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (Math.max(min, max) - Math.min(min, max) + 1)) + Math.min(min, max);
  }
};

const usedIndexes = new Set();
const getUniqueRandomNumber = (callback) => {
  const newNumber = callback;
  if (usedIndexes.has(newNumber)) {
    return this.getUniqueRandomNumber(callback);
  }
  usedIndexes.add(newNumber);
  return newNumber;

};

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {getRandomInt, getUniqueRandomNumber, isEscapeKey};
