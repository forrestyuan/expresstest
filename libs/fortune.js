/**
 * Created by onelife on 2017/11/10.
 */
var fortuneCookies = [
    "Conquer your fears or they will conquer you .",
    "Rivers need spring .",
    "Do not fear what you don't konw",
    "You will have a pleasent surprise",
    "Whenever possible, Keep it simple"
];

exports.getFortune = function () {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
}
