module.exports = function toReadable (num) {
  let result = '';

  if (num % 1000 > 99) {
    let temp = +num.toString().slice(-3, -2);
    result += getUnits(temp) + 'hundred ';
  }

  if (num % 100 > 19) {
    let temp = +num.toString().slice(-2, -1);
    result += getDozen(temp);
  }

  if (num % 100 > 9 && num % 100 < 20) {
    let temp = +num.toString().slice(-2);
    result += getNumeral(temp);
  } else {
    result += getUnits(num % 10);
  }

  if (!num) result = 'zero ';

  return result.trim();
}

function getUnits(num) {
  switch (num) {
    case 1:
      return 'one ';
    case 2:
      return 'two ';
    case 3:
      return 'three ';
    case 4:
      return 'four ';
    case 5:
      return 'five ';
    case 6:
      return 'six ';
    case 7:
      return 'seven ';
    case 8:
      return 'eight ';
    case 9:
      return 'nine ';
    case 0:
      return '';
  }
}

function getNumeral(num) {
  switch (num) {
    case 10:
      return 'ten ';
    case 11:
      return 'eleven ';
    case 12:
      return 'twelve ';
    case 13:
      return 'thirteen ';
    case 14:
      return 'fourteen ';
    case 15:
      return 'fifteen ';
    case 16:
      return 'sixteen ';
    case 17:
      return 'seventeen ';
    case 18:
      return 'eighteen ';
    case 19:
      return 'nineteen ';
  }
}

function getDozen(num) {
  switch (num) {
    case 2:
      return 'twenty ';
    case 3:
      return 'thirty ';
    case 4:
      return 'forty ';
    case 5:
      return 'fifty ';
    case 6:
      return 'sixty ';
    case 7:
      return 'seventy ';
    case 8:
      return 'eighty ';
    case 9:
      return 'ninety ';
  }
}