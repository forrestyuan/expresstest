/**
 * Created by onelife on 2017/11/9.
 */
var express = require('express');
var fortune = require('./libs/fortune.js');
var tours = require('./libs/tours.js');

var app = express();
//设置handlebars 试图引擎
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
//创建中间件
app.use(function (req, res, next) {
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weather = tours.weatherdata();
    console.log(res.locals.partials.weather);
    next();
})
//用于测试
app.use(function (req,res,next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
})
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
    res.render('about',{
        fortune:fortune.getFortune(),
        pageTestScript:'/qa/tests-about.js'
    });
});
//测试返回json
app.get('/api/tour',function(req, res) {
    res.json(tours.tourslist);
});
//返回json,xml,text
app.get('/api/tourAll',function(req, res){
    res.format({
        'application/json':function(){
            res.json(tours.tourslist);
        },
        'application':function(){
            res.type('application/xml').send(tours.toursxml);
        },
        'text/xml':function(){
            res.type('text/xml').send(tours.toursxml);
        },
        'text/plain':function(){
            res.type('text/plain').send(tours.tourtext);
        }
    });
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

