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
__  __ _   _ _____ _____        __
|  \/  | | | | ____/ _ \ \      / /
| |\/| | | | |  _|| | | \ \ /\ / /
| |  | | |_| | |__| |_| |\ V  V /
|_|  |_|\___/|_____\__\_\ \_/\_/

  console.log(`Trophy And Crown Hack Safe! 
By : ${kapur.bold('Mueq5854')} - Credit : @dkmpostor & @Eskey
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

console.log(kapur.bgBlack(`\r[ ${moment().format('HH:mm:ss')} ] ${kapur.white(`User : ${username}`)} | ${kapur.blue(`Trophy : ${trophy}`)} | ${kapur.red(`Crown : ${crown}`)}`));
      await sleep(6000);

    } else if (result == 'BANNED') {
      console.log(kapur.bgRed(`Your Account Anda Telah Di Banned`));
     break;
    }
  }


})();

