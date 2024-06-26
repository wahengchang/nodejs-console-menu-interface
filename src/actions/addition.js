const inquirer = require('inquirer');

const addition = async () => {
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

  const result = parseFloat(firstNumber) + parseFloat(secondNumber);
  console.log(`The result is ${result}`);
  return
};

module.exports = addition;