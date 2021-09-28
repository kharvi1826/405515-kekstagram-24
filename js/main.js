function getRandomInt(min, max) {
  if (max <= min){
    return min;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//source: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
console.log (getRandomInt (0, 10));

function getStringLength(chekingString, maxLength) {
  if (chekingString <= maxLength) {
    return true;
  }
  return false;
}
console.log (getStringLength());

function getRandomIntPoint(min, max) {
  if (max <= min){
    return max;
  }
  return Math.random() * (max - min) + min;
}

console.log(getRandomIntPoint(3.1, 5.2));
