const inquirer = require('inquirer');

const english2 = async () => {
  const { inputEnglishWord } = await inquirer.prompt([
    {
      type: 'input',
      name: 'inputEnglishWord',
      message: 'Enter the the english words for "Little Male":'
    }
  ]);

  console.log(`You did a good job: ${inputEnglishWord}`);
  return
};

module.exports = english2;
