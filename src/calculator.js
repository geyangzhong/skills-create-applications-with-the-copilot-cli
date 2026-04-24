#!/usr/bin/env node
// Calculator CLI
// Supported operations: add, sub, mul, div
// Examples:
//   node src/calculator.js add 2 3    => 5
//   node src/calculator.js sub 5 2    => 3
//   node src/calculator.js mul 4 6    => 24
//   node src/calculator.js div 10 2   => 5

function printHelp() {
  console.log('Usage: node src/calculator.js <command> <a> <b>');
  console.log('Commands: add, sub, mul, div');
  console.log('Examples:');
  console.log('  node src/calculator.js add 2 3');
  console.log('  node src/calculator.js div 10 2');
}

function errorExit(msg) {
  console.error('Error:', msg);
  process.exit(1);
}

const argv = process.argv.slice(2);
if (argv.length === 0 || argv[0] === '--help' || argv[0] === '-h') {
  printHelp();
  process.exit(0);
}

if (argv.length !== 3) {
  errorExit('Expected 3 arguments: <command> <a> <b>. Use --help for usage.');
}

const cmd = argv[0].toLowerCase();
const a = Number(argv[1]);
const b = Number(argv[2]);

if (Number.isNaN(a) || Number.isNaN(b)) {
  errorExit('Operands must be numeric.');
}

let result;
switch (cmd) {
  case 'add':
    result = a + b;
    break;
  case 'sub':
    result = a - b;
    break;
  case 'mul':
    result = a * b;
    break;
  case 'div':
    if (b === 0) {
      errorExit('Division by zero.');
    }
    result = a / b;
    break;
  default:
    errorExit('Unknown command. Supported commands: add, sub, mul, div');
}

// Print result to stdout and exit with code 0 on success
console.log(result);
process.exit(0);
