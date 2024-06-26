const english1 = require('./english1.js');
const english2 = require('./english2.js');
const mainMenu = require('../../menu');

const englishMenu = async () => {
  const options = [
    {
      name: 'English Exercises 1',
      value: english1
    },
    {
      name: 'English Exercises 2',
      value: english2
    },
    {
      name: 'Back',
      value: null
    }
  ];

  await mainMenu(options,englishMenu);
};

module.exports = englishMenu;
