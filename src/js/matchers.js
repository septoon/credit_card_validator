const matchers = (input, cardNum, cards) => {
  const oneChar = input.slice(0, 1);
  const twoChar = input.slice(0, 2);
  if (cardNum.Visa.includes(parseInt(oneChar, 10))
      || cardNum.Visa.includes(parseInt(twoChar, 10))) cards[0].classList.remove('transparent-card');
  if (cardNum.MasterCard.includes(parseInt(twoChar, 10))) cards[1].classList.remove('transparent-card');
  if (cardNum.jcb.includes(parseInt(twoChar, 10))) cards[2].classList.remove('transparent-card');
  if (cardNum.Discover.includes(parseInt(twoChar, 10))) cards[3].classList.remove('transparent-card');
  if (cardNum.DinersClub.includes(parseInt(twoChar, 10))) cards[4].classList.remove('transparent-card');
  if (cardNum.AmericanExpress.includes(parseInt(twoChar, 10))) cards[5].classList.remove('transparent-card');
  if (cardNum.ChinaUnionPay.includes(parseInt(twoChar, 10))) cards[6].classList.remove('transparent-card');
  if (cardNum.Mir.includes(parseInt(twoChar, 10))) cards[7].classList.remove('transparent-card');
};

export default matchers;
