![alt text](./assets/rkg_title.png "Rainbow Key Generator")

## Prerequisites
You will need to create a rainbow table, it should look like this: 

| / | A | B | C | ... |
| --- | --- | --- | --- | --- |
| 1 | `pear` | `radish` | `banana` | ... |
| 2 | `carrot` | `blueberry` | `avocado` | ... |
| 3 | `walnut` | `litchi` | `apple` | ... |
| ... | ... | ... | ... | ... |

Of course table's size and cell's content should be of your own choosing and kept secret.

## What is it about?
Rainbow Key Generator is a CLI app that facilitate randomizing your rainbow key.
For example:
* `A1 B2 C3`  will be  `pearblueberryapple`
* `A2 B1 C2`  wil be  `carrotradishavocado`

## How to run?

### Locally
Simply run `npm install` and `node .` in your terminal from the project root folder.

### Globally
The goal of this script is to be able to run it from anywhere. 
You can do that with the `npm install -g .`
You can now run the script by typing `rkg` in your terminal. 
Feel free to change the command name in `package.json` under the `bin` key.

### What to do once installed
Run your script and answer 3 questions relative to the size of your table and key, it will then generate a random key.

## Dependencies
* [Boxen](https://github.com/sindresorhus/boxen "Boxen's github")
* [Chalk](https://github.com/chalk/chalk "Chalk's github")
* [Cli-table](https://github.com/Automattic/cli-table "Cli table's github")
* [Loading-cli](https://github.com/jaywcjlove/loading-cli "Loading cli's github")

## How to uninstall
`npm uninstall -g rkg` or `npm uninstall -g <your custom script name>`