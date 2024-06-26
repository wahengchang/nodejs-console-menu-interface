const addition = require('./src/actions/addition');
const english = require('./src/actions/english');
const mainMenu = require('./src/menu');

(async () => {

  const options = [
    {
      name: 'Addition',
      value: addition
    },
    {
      name: 'English',
      value: english
    },
    {
      name: 'Exit',
      value: null
    }
  ];

  mainMenu(options);
})();