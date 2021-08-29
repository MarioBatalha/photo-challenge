const express = require('express');

const cors = require('cors');
const morgan = require('morgan');

import routes from './src/routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333);