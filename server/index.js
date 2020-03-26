const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config');
const apiRoutes = require('./routes');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production'; // true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); // part of next config

mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log('Database is connected');
    },
    err => {
        console.log(`Cannot connect to database: ${err}`);
    }
);

nextApp.prepare().then(() => {
    // express code here
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);
    app.get('*', (req, res) => {
        return handle(req, res); // for all the react stuff
    });
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`);
    });
});
