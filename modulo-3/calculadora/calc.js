function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  if (num2 == 0) {
    return 0;
  }
  return num1 / num2;
}

module.exports = {
  soma: add,
  subtracao: sub,
  multiplicao: mult,
  divisao: div
}
