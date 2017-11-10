/**
 * Created by onelife on 2017/11/9.
 */
var express = require('express');
var app = express();
//设置handlebars 试图引擎
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

//数据区
var fortunes = [
    "Conquer your fears or they will conquer you .",
    "Rivers need spring .",
    "Do not fear what you don't konw",
    "You will have a pleasent surprise",
    "Whenever possible, Keep it simple"
]
//加载静态资源
app.use(express.static(__dirname+"/public"));
//路由网页
app.get('/', function (req, res) {
   /* res.type('text/plain');
    res.send('meadowlark travel');*/
    res.render('home');
});

app.get('/about',function (req, res) {
    /*res.type('text/plain');
    res.send('about meadowlark travel');*/
    var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about',{fortune:randomFortune});
});

//定制404 页面
app.use(function (req, res) {
    //res.type('text/plain');
    res.status(404);
    //res.send('404 Not Found');
    res.render('404');
});

//定制500页面
app.use(function (err, req, res, next) {
    console.error(err.stack);
    //res.type('text/plain');
    res.status(500);
    //res.send('500 Server Error');
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl + C to terminate');
});

