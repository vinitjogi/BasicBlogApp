const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const connect = require('./config/database');
const apiRoutes = require('./routes/index')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/api', apiRoutes)
app.listen(PORT, async() => {
    console.log(`server started on port ${PORT}`);
    await connect();
    console.log('mongodb connected');

});