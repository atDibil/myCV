//import modules
const express = require('express');
const path = require('path');

//Initialize app
const app = express();

//Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Home Route @'/'
app.get('/', (req, res)=>{
    res.render('index');
});

//server started
app.listen(3000, console.log('Server started running on port 3000...'));