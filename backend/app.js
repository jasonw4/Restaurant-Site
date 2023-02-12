const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();


app.use(cors({ origin: true, credentials: true}));

const connection = "mongodb+srv://jasonw77:Maddenmobile1@cluster0.nen0vu9.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 5500;

mongoose.connect(connection)
    .then(() => app.listen(port, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));



