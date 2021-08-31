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

/*app.use((req: any, res: any, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    next();

    res.setHeader('Access-Control-Allow-Origin', 'GET,PUT,POST,DELETE,OPTIONS');
})*/