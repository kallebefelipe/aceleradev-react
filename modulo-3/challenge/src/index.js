'use strict'

const fibonacci = () => {
  let sequence = [0, 1]

  let next;
  while (sequence[sequence.length - 1] < 350) {
    next = sequence[sequence.length - 2] + sequence[sequence.length - 1]
    sequence.push(next)
  }
  return sequence
}

const isFibonnaci = (num) => {
  const sequence = fibonacci()
  return sequence.includes(num)
}

module.exports = {
    fibonacci,
    isFibonnaci
}
