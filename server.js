const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs')

const port = process.env.PORT || 5000;
const publicpath = path.join(__dirname, './public');
app.use(express.static(publicpath));
const templatespath = path.join(__dirname, './template/views')
const partialspath = path.join(__dirname, '/template/partials')
app.set('view engine', 'hbs')
app.set('views', templatespath)
hbs.registerPartials(partialspath)

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(port)
