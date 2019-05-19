import msg from '../src/js/messages';

test('valid', () => {
  const expected = msg('4111111111111111');
  const received = '';

  expect(expected).toBe(received);
});

test('empty field', () => {
  const expected = msg('');
  const received = 'Please insert a credit card number';

  expect(expected).toBe(received);
});

test('not a number', () => {
  const expected = msg('411dsfsdf1111111');
  const received = 'This is should be a number';

  expect(expected).toBe(received);
});

test('to much digits', () => {
  const expected = msg('411111111111111111');
  const received = 'Wrong number of digits';

  expect(expected).toBe(received);
});
