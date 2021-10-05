// function getRandomInt(min, max) {
//   if (max <= min){
//     return min;
//   }
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// //source: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// getRandomInt (0, 10);

// function getStringLength(chekingString, maxLength) {
//   if (chekingString <= maxLength) {
//     return true;
//   }
//   return false;
// }
// getStringLength();

// function getRandomIntPoint(min, max) {
//   if (max <= min){
//     return max;
//   }
//   return Math.random() * (max - min) + min;
// }
// getRandomIntPoint(3.1, 5.2);

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

getRandomInt(1, 10);

const checkStringLength = (checkString, maxLength) => checkString.length <= maxLength;

checkStringLength('djfab;bfl,j', 10);

const DESCRIPTIONS = ['Кот', 'Бабочка', 'Снежинка', 'Автомобиль', 'Колокольчик', 'Мороженое'];
const MESSAGES = ['Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В целом всё неплохо. Но не всё.'];
const NAMES = ['Римма', 'Света', 'Федор', 'Галя', 'Ваня', 'Илья', 'Олег', 'Коля' , 'Аля'];
const itemsCount = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_ID_AVATAR = 1;
const MAX_ID_AVATAR = 6;

const usedIndexes = new Set();
const getUniqueRandomNumber = (callback) => {
  const newNumber = callback;
  if (usedIndexes.has(newNumber)) {
    return usedIndexes.getUniqueRandomNumber(callback);
  }
  usedIndexes.add(newNumber);
  return newNumber;

};

const getRandomElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getComment = () => (
  {
    id: getUniqueRandomNumber(getRandomInt),
    avatar: 'img/avatar-{getRandomInt(MIN_ID_AVATAR, MAX_ID_AVATAR)}.svg',
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  });

const getPhoto = (index) =>  ({
  id: index,
  url: 'photos/{i}.jpg',
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInt(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length: getRandomInt(1, 10)}, getComment),
});
