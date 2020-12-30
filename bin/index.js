#!/usr/bin/env node

const chalk = require("chalk");
const readline = require("readline");
const boxen = require("boxen");
const loading = require('loading-cli');
const Table = require('cli-table');

const alphabet = [
  'A', 'B', 'C', 'D',
  'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X',
  'Y', 'Z'
];

// Title
const title = chalk.green.bold("RAINBOW KEY GENERATOR");

const boxenOptions = {
  padding: { top: 1, right: 16, bottom: 1, left: 16 },
  margin: 0,
  borderColor: 'green',
};

const msgBox = boxen(title, boxenOptions);
console.log(msgBox);

// Intro
console.log('Hello, this is a rainbow table key generator\n');

// Funtions
const tableGraphGenerator = (tableRowSize, tableColumnSize) => {
  let head = [chalk.green.bold('/')];
  let filler = [];
  for(let column = 0; column < tableColumnSize; column++) {
    head.push(chalk.green.bold(alphabet[column]));
    filler.push(' ');
  }
  const table = new Table({
    head: head,
  });
  for(let row = 0; row < tableRowSize; row++) {
    let rowValue = Array(filler.length + 1).fill(' ');
    rowValue[0] = chalk.green.bold(row + 1);
    
    table.push(rowValue)
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

// Setup read user command
const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const load = loading("Generating your key")

readLineInterface.question("How many number's row ? ", function (tableRowSize) {
  readLineInterface.question("How many alphabetical's column ( < 26 )? ", function (tableColumnSize) {
    if(tableColumnSize > 26) {
      readLineInterface.close();
    }
    readLineInterface.question("How many cells for your key ? ", function (passwordLength) {
      // Graph table example
      console.log(`\nYour table should look like this: `);
      console.log(tableGraphGenerator(tableRowSize, tableColumnSize));
      // Micro loading
      load.frame(["◰", "◳", "◲", "◱"]);
      load.start();
      setTimeout(function () {
        load.stop()
        console.log('\nHere is your key:\n')
        // Key
        const key = chalk.white.bold(keyGenerator(tableRowSize, tableColumnSize, passwordLength));

        const box = {
          padding: 1,
          margin: 0,
          borderColor: 'green',
        };
        const keyBox = boxen(key, box);
        console.log(keyBox);
        readLineInterface.close();
      }, 3000)

    });
  });
});

readLineInterface.on("close", function () {
  process.exit(0);
});
