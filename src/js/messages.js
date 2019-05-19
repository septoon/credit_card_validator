const errorMsg = document.getElementById('empty');
const nan = document.getElementById('nan');
const wrong = document.getElementById('wrong');
// console.log(errorMsg.classList);
// console.log(nan);
// console.log(wrong);


const msg = (input) => {
  let error = '';
  if (input === '') {
    errorMsg.classList.remove('transparent');
    error = 'Please insert a credit card number';

    setTimeout(() => {
      errorMsg.classList.add('transparent');
    }, 2000);
  // eslint-disable-next-line no-restricted-globals
  } else if (isNaN(input)) {
    nan.classList.remove('transparent');
    nan.classList.add('invalid');
    error = 'This is should be a number';

    setTimeout(() => {
      nan.classList.add('transparent');
      nan.classList.remove('invalid');
    }, 2000);
  } else if (input.length < 14 || input.length > 16) {
    wrong.classList.remove('transparent');
    wrong.classList.add('invalid');
    error = 'Wrong number of digits';

    setTimeout(() => {
      wrong.classList.add('transparent');
      wrong.classList.remove('invalid');
    }, 2000);
  }
  return error;
};

export default msg;
