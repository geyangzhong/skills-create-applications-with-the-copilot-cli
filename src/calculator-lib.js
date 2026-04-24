// Calculator library
// Exports functions: add, sub, mul, div
// Each function accepts two numeric operands and throws on invalid input

function validateNumbers(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Operands must be numeric');
  }
}

function add(a, b) {
  validateNumbers(a, b);
  return a + b;
}

function sub(a, b) {
  validateNumbers(a, b);
  return a - b;
}

function mul(a, b) {
  validateNumbers(a, b);
  return a * b;
}

function div(a, b) {
  validateNumbers(a, b);
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = { add, sub, mul, div };
