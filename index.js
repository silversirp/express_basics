let express = require('express');
//require path
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
// add public directory
// app.use(express.static('public'));


//add views directory path
app.set('views', path.join(__dirname, 'views'));
//add views template engine
app.set('view engine', 'ejs');

app.get('/login', (req, res)=> {

    res.render('login');
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(username == 'user' && password == 'qwerty') {
        res.redirect('/dashboard');
    }
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});
