#!/usr/bin/env node

const chalk = require('chalk');
const readline = require('readline');
const boxen = require('boxen');
const loading = require('loading-cli');
const Table = require('cli-table');
const {
  alphabet,
  tableGraphGenerator,
  keyGenerator
} = require('./generators');

const title = chalk.bold.green('RAINBOW KEY GENERATOR');
const boxenOptions = {
  padding: {
    top: 1,
    right: 16,
    bottom: 1,
    left: 16
  },
  margin: 0,
  borderColor: 'green',
};

const msgBox = boxen(title, boxenOptions);
console.log(msgBox);
console.log('Hello, this is a rainbow table key generator\n');

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const load = loading('Generating your key')

readLineInterface.question("How many number's row ? ", function(tableRowSize) {
  readLineInterface.question("How many alphabetical's column ( < 26 )? ", function(tableColumnSize) {
    if (tableColumnSize > 26) {
      readLineInterface.close();
    }
    readLineInterface.question('How many cell for your key ? ', function(passwordLength) {
      // Graph table example
      console.log(`\nYour table should look like this: `);
      console.log(tableGraphGenerator(tableRowSize, tableColumnSize));
      // Micro loading
      load.frame(['◰', '◳', '◲', '◱']);
      load.start();
      setTimeout(function() {
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
      }, 1000)

    });
  });
});

readLineInterface.on('close', function() {
  process.exit(0);
});
