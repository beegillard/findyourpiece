require('dotenv').config();
const {PORT, SESSION_SECRET} = process.env;
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
//const morgan = require('morgan');
//const helmet = require('helmet');
const mountRoutes = require('./routes/routes');
 
const app = express();

app.use(cors());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

mountRoutes(app);

app.get('/', (req, res) => {
    res.send("This is the home page");
})


app.listen(PORT, () => {
    console.log(`App running on port ${PORT} ${SESSION_SECRET}`);
})
 