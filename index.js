const express = require('express');
const app = express();
const sequelize = require('./db/db');
require('dotenv').config();

const router = require('./router')

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('', router);

async function start() {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

start();

