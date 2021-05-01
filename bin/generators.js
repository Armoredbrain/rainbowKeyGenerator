#!/usr/bin/env node

const chalk = require('chalk');
const Table = require('cli-table');
const alphabet = Array.apply(undefined, Array(26)).map(function(x, y) {
  return String.fromCharCode(y + 65);
});

const tableGraphGenerator = (tableRowSize, tableColumnSize) => {
  let head = [chalk.yellow.bold('/')];
  for (let column = 0; column <= 2; column++) {
    switch (column) {
      case 0:
        head.push(chalk.green.bold(alphabet[column]));
        break;
      case 1:
        head.push(chalk.white.bold('►'));
        break;
      case 2:
        head.push(chalk.green.bold(alphabet[tableColumnSize]));
        break;
      default:
        break;
    }
  }

  const table = new Table({
    head
  });

  for (let row = 0; row <= 2; row++) {
    switch (row) {
      case 0:
        table.push([chalk.green.bold(1), ' ', ' ', ' '])
        break;
      case 1:
        table.push([chalk.white.bold('▼'), ' ', ' ', ' '])
        break;
      case 2:
        table.push([chalk.green.bold(tableRowSize), ' ', ' ', ' '])
        break;
      default:
        break;
    }
  }
  return table.toString();
}

const keyGenerator = (tableRowSize, tableColumnSize, passwordLength) => {
  const rainbowKey = [];
  for (let i = 0; i < passwordLength; i++) {
    let letter = alphabet[Math.floor(Math.random() * tableColumnSize)];
    let number = Math.floor(Math.random() * tableRowSize) + 1;

    let item = letter + number

    rainbowKey.push(item)
  }
  return rainbowKey.join(' | ');

}

module.exports = {
  alphabet,
  tableGraphGenerator,
  keyGenerator
}
