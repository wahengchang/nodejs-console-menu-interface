const inquirer = require('inquirer');
const backToMainMenu = require('../backToMainMenu');

const minus = async () => {
  const { firstNumber } = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstNumber',
      message: 'Enter the first number:'
    }
  ]);

  const { secondNumber } = await inquirer.prompt([
    {
      type: 'input',
      name: 'secondNumber',
      message: 'Enter the second number:'
    }
  ]);

  const result = parseFloat(firstNumber) - parseFloat(secondNumber);
  console.log(`The result is ${result}`);

  await backToMainMenu();
};

module.exports = minus;