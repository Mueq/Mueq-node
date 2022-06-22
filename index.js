const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {



Dibuat okey by : ${chalk.bold('MUEQ5854')}  (chalk.bold(Credit : @dkmpostor & @Eskey
`);

  const auth = rs.question('Enter Authentication Code! : ');
  console.log('');

  while (true) {


    const result = await GoStumble(auth);
    if (!result) {

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.bold.gray(`
[ ${chalk.bold.white(counter)} ]
[ ${chalk.bold.white('Time')} ]: ${moment().format('HH:mm:ss')}
[ ${chalk.bold.white('Username')} ] : ${username}
[ ${chalk.bold.white('Country')} ] : ${country}
[ ${chalk.bold.gold('Trophy')} ] : ${trophy}
[ ${chalk.bold.red('Crown')} ] : ${crown}`));
     await sleep(6000);

    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Your Account And a Tel ah Di Banned`));
     break;
    }
  }


})();

