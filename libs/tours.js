/**
 * Created by onelife on 2017/11/11.
 */
var tourslist = [
    {id:0,name:'hood river',price:99.99},
    {id:1,name:'oregon coast',price:149.75}
];

var toursdata ={
    tourslist : tourslist,
    toursxml :'<?xml version="1.0"?><tours>'+tourslist.map(function (p) {
            return '<tour id="'+p.id+'"price="'+p.price+'">'+p.name+'</tour>'
        }).join('')+'</tours>',
    tourtext : tourslist.map(function (p) {
            return p.id+':'+p.name+'('+p.price+')';
        }).join('\n'),
    weatherdata: function () {
        return {
            locations:[
                {
                    name:'Portland',
                    forecastUrl:'http://www.wunderground.com/US/OP/Portland.html',
                    iconUrl:'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
                    weather:'Overcast',
                    temp:'54.1F(12.3 C)'
                },
                {
                    name:'Bend',
                    forecastUrl:'http://www.wunderground.com/US/OP/Bend.html',
                    iconUrl:'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
                    weather:'Partly Cloudy',
                    temp:'55.0F(12.7C)'
                },
                {
                    name:'Manzanita',
                    forecastUrl:'http://www.wunderground.com/US/OP/Manzanita.html',
                    iconUrl:'http://icons-ak.wxug.com/i/c/k/rain.gif',
                    weather:'Light Rain',
                    temp:'55.1F(12.8 C)'
                }

            ]
        };
    }
}


module.exports = toursdata;
