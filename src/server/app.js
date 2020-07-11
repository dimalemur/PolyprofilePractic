import config from './config';
import errorHandler from './middlewares/errorHandler';

const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const staticWay = express.static(path.join(__dirname, '../../public/build/'));

app
  .use(morgan('tiny'))
  .use(bodyParser.json())
  .use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret,
  }))
  .get('/ping', (_req, res) => res.json({ status: 200 })) // проверка пинга
  .use('/', staticWay)
  .use('/:user', staticWay)
  .use('/:user/:page', staticWay)
  .use('/login/authhelp/', staticWay)
  .use(errorHandler);

app.listen(config.port, (err) => {
  console.log(`Server is started in http://127.0.0.1:${config.port}/`);
});
