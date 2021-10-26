import { getRandomInt } from './utils.js';
import { getUniqueRandomNumber } from './utils';

const DESCRIPTIONS = ['Кот', 'Бабочка', 'Снежинка', 'Автомобиль', 'Колокольчик', 'Мороженое'];
const MESSAGES = ['Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В целом всё неплохо. Но не всё.'];
const NAMES = ['Римма', 'Света', 'Федор', 'Галя', 'Ваня', 'Илья', 'Олег', 'Коля' , 'Аля'];
const POSTS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_ID_AVATAR = 1;
const MAX_ID_AVATAR = 6;

const getRandomElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getComment = () => (
  {
    id: getUniqueRandomNumber(getRandomInt),
    avatar: `img/avatar-${getRandomInt(MIN_ID_AVATAR, MAX_ID_AVATAR)}.svg`,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  });

const getPhoto = (index) =>  ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInt(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length: getRandomInt(1, 10)}, getComment),
});

const createGallery = new Array(POSTS).fill(null).map((index) => getPhoto(index + 1));

export {createGallery};
