const addition = require('./src/actions/addition');
const minus = require('./src/actions/minus');
const mainMenu = require('./src/menu');

(async () => {

  const options = [
    {
      name: 'Addition',
      value: addition
    },
    {
      name: 'Minus',
      value: minus
    },
    {
      name: 'Exit',
      value: null
    }
  ];

  mainMenu(options);
})();