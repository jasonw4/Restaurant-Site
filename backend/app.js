const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const routes = require('./routes/routes')
require("dotenv").config();
const app = express();


app.use(cors({ origin: true, credentials: true}));


const port = process.env.PORT || 5500;

mongoose
    .connect(process.env.connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`DB Connected`))
    .catch((error) => console.log(error));

app.get('/', (req, res) => res.send('Hello world!'));
const server = app.listen(port, () => console.log(`Server running on port: ${port}`));


