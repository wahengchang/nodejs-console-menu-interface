const inquirer = require('inquirer');

const mainMenu = async (options, returnMenu) => {
  const { menuOption } = await inquirer.prompt([
    {
      type: 'list',
      name: 'menuOption',
      message: 'Menu:',
      choices: options.map(option => option.name)
    }
  ]);

  const selectedOption = options.find(option => option.name === menuOption);

  if (selectedOption && selectedOption.value) {
    await selectedOption.value();
    if (returnMenu) {
      await returnMenu();
    }
  } else {
    console.log('Goodbye!');
    return;
  }

  mainMenu(options);
};

module.exports = mainMenu;