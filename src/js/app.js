export default function validatePhone(phoneNumber) {
  // удаляем все нецифровые символы
  let cleanedNumber = phoneNumber.replace(/\D/g, '');

  // если номер РФ и начинается на 8, заменяем её на 7
  if (cleanedNumber.length === 11 && cleanedNumber[0] === '8') {
    cleanedNumber = '7'.concat(cleanedNumber.slice(1));

    // если номер РФ и начинается на 9, добавляем 7 в начало
  } else if (cleanedNumber.length === 10 && cleanedNumber[0] === '9') {
    cleanedNumber = '7'.concat(cleanedNumber);
  }

  return '+'.concat(cleanedNumber);
}
