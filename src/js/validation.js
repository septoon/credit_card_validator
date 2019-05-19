/* eslint-disable no-restricted-globals */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-restricted-syntax */

const validation = (input, cardNum, valid) => {
  const oneChar = input.slice(0, 1);
  const twoChar = input.slice(0, 2);
  for (const key in cardNum) {
    if (cardNum[key].includes(parseInt(oneChar, 10))
    || cardNum[key].includes(parseInt(twoChar, 10))
    && isNaN(input) === false && input.length > 13 && input.length < 17) {
      valid.classList.remove('transparent');

      setTimeout(() => {
        valid.classList.add('transparent');
      }, 2000);
    }
  }
};

export default validation;
