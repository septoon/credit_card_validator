import cards from '../src/js/cards';
import msg from '../src/js/messages';
import validation from '../src/js/validation';
import matchers from '../src/js/matchers';

test('this card', () => {
  document.body.innerHTML = `
  <div class="main">
    <h3 class="title" >Check your credit card number</h3>
    <div class="cards-wrapper">
        <img src="./img/visa.png" alt="visa" class="transparent-card" data-name="visa">
        <img src="./img/mastercard.png" alt="masterCard" class="transparent-card" data-name="masterCard">
        <img src="./img/jcb.png" alt="jcb" class="transparent-card" data-name="jcb">
        <img src="./img/discover.png" alt="discover" class="transparent-card" data-name="discover">
        <img src="./img/americanExpress.png" alt="americanExpress" class="transparent-card" data-name="AmericanExpress">
        <img src="./img/dinersclub.png" alt="dinersClub" class="transparent-card" data-name="dinersClub">
        <img src="./img/unionPay.png" alt="unionPay" class="transparent-card" data-name="unionPay">
        <img src="./img/mir.png" alt="mir" class="transparent-card" data-name="mir">
      </div>
    <form id="form" class="form-inline" novalidate="novalidate" onsubmit="return false">
      <div class="form-group">
        <input id="card_number" name="card_number" type="text"
        placeholder="Credit card number">
        <button type="submit" id="submitform" class="btn btn-success">Click to Validate</button>
        <span class="error transparent" id="empty">Please insert a credit card number</span>
        <span class="error transparent" id="nan">This is should be a number</span>
        <span class="error transparent" id="wrong">Wrong number of digits</span>
        <span class="valid transparent" id="valid">Valid number</span>
      </div>
    </form>
    <h3 class="title" >Example credit card numbers</h3>
 </div>`;

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

  const mir = document.querySelector('[data-name=mir]');
  expect(mir).toBe('this');
});
