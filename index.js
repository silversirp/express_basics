let express = require('express');
//require path
const path = require('path');
const app = express();
// add public directory
app.use(express.static('public'));
//add views directory path
app.set('views', path.join(__dirname, 'views'));
//add views template engine
app.set('view engine', 'ejs');

app.get('/user/:username', (req, res)=> {
    let user = req.params.username;
    res.render('index.ejs', {username: user});
});

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});
