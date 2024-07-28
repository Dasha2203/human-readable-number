module.exports = function toReadable(number) {
  const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }

  if (!number) return numbers[number]

  let res = ''
  let currentNumber = number.toString()

  let singleNumber = +currentNumber[currentNumber.length - 1]
  let decimalNumber = currentNumber.length > 1 ? +currentNumber[currentNumber.length - 2] * 10 : null
  let hundredNumber = currentNumber.length > 2 ? +currentNumber[currentNumber.length - 3] : null

  if (hundredNumber) {
    res += numbers[hundredNumber] + ' hundred'
  }

  if (decimalNumber + singleNumber < 20 && decimalNumber + singleNumber > 9) {
    res += ' ' + numbers[decimalNumber + singleNumber]

    return res.trim()
  } 

  if (decimalNumber) {
    res += ' ' + numbers[decimalNumber]
  }

  if (singleNumber) {
    res += ' ' + numbers[singleNumber]
  }

  return res.trim()
}
