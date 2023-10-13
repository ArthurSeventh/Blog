const path = require('path');
const express = require('express');
const morgan = require('morgan');
const  handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routers');

const pa = __dirname;

app.use(express.static(path.join(__dirname,'public')));


//Cache data from form Data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//Template Engine 
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "resources/views"));

// route init 
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port} \n path is: ${pa}`)
})
