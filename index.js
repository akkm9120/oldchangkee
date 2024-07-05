// 1. SETUP
// require is also known as 'importing'
// require is from something known as 'commonjs'
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

const app = express();

// enable form processing for Express
app.use(express.urlencoded({
    extended: false
}));

// setup hbs
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}))

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

app.get('/', async function(req,res){
    res.render('index',{
       
    })
})

app.listen(3000, function () {
    console.log("server has started");
})