const express = require('express');
const chalk = require('chalk')
const app = express();

app.get('/', (req, res) => {
  res.send(`BOT IS READY | SUBSCRIBE TO EE3DEV | SOME CODES OF COMMANDHANDLER ARE COPIED FROM CTK`);
});

app.listen(3000, () => {
    console.log(chalk.bold.greenBright('Copy paste this link in your browser'))
    console.log(chalk.bold.blueBright('http://localhost:3000/'))
})