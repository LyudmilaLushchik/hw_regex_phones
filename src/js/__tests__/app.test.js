import validatePhone from '../app';

test('should return phoneNumber 8 (927) 000-00-00 in the format +7xxxxxxxxxx', () => {
  const phoneNumber = '8 (927) 000-00-00';
  const expected = '+79270000000';
  expect(validatePhone(phoneNumber)).toBe(expected);
});

test('should return phoneNumber 960 000 00 00 in the format +7xxxxxxxxxx', () => {
  const phoneNumber = '960 000 00 00';
  const expected = '+79600000000';
  expect(validatePhone(phoneNumber)).toBe(expected);
});

test('should return phoneNumber +7 960 000 00 00 in the format +7xxxxxxxxxx', () => {
  const phoneNumber = '+7 960 000 00 00';
  const expected = '+79600000000';
  expect(validatePhone(phoneNumber)).toBe(expected);
});

test('should return phoneNumber +86 000 000 0000 in the format +xxxxxxxxxx', () => {
  const phoneNumber = '+86 000 000 0000 ';
  const expected = '+860000000000';
  expect(validatePhone(phoneNumber)).toBe(expected);
});
