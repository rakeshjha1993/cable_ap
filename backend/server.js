const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Channel = require('./models/channel');
const channelRouter = require('./routes/channel');
const boquetRouter = require('./routes/boquet');
const broadcasterRouter = require('./routes/broadcaster');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.load();
const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_ADDRESS;

console.log(DB_URL);


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/channel', channelRouter);
app.use('/boquet', boquetRouter);
app.use('/broadcaster',broadcasterRouter);

mongoose.connect(DB_URL);


app.listen(PORT, (err) => {
  console.log('server is listening');

})