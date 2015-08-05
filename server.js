var express = require('express');
var exphbs  = require('express-handlebars');
var _ = require('underscore');

var port = process.env.PORT || 1337;
var app = express();

var hbs = exphbs.create({
	defaultLayout: 'main',
    helpers: {
        copyright: function () { return new Date().getFullYear(); }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) { res.render('home', {navhome:"true"}) });
app.get('/about', function (req, res) { res.render('about', {navabout:"true"}) });
app.get('/blog', function (req, res) { res.render('blog', {navblog:"true"}) });

app.use("/", express.static(__dirname + '/public'));

app.listen(port);