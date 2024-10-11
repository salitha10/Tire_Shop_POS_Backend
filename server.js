// Express App
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Add routes
const itemRoutes = require('./routes/item_controller');

//Import dotenv
require('dotenv').config();
const port = process.env.PORT || 3000;

//Body parser
app.use(bodyParser.json());

//Routes
app.use('/items', itemRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);


