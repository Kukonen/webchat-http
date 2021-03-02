const express = require('express');
const exphbs = require('express-handlebars');

const router = require('./router');

const app = express();

const hbs = exphbs.create({
    defaultLayout: '',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.use('/', router);

const port = 5000;

app.listen(port, () => {
    console.log(`server run by port ${port}`)
})