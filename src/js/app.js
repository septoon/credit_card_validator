import cards from './cards';
import msg from './messages';
import validation from './validation';
import matchers from './matchers';

const btn = document.getElementById('submitform');
const valid = document.getElementById('valid');
const input = document.getElementById('card_number');
const cardNum = {
  Visa: [4, 81, 97],
  MasterCard: [51, 52, 53, 54, 55],
  jcb: [31, 35],
  Discover: [60],
  DinersClub: [30],
  AmericanExpress: [34, 37],
  ChinaUnionPay: [62],
  Mir: [22],
};

btn.addEventListener('click', () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add('transparent-card');
  }

  validation(input.value, cardNum, valid);
  matchers(input.value, cardNum, cards);
  msg(input.value);
});
