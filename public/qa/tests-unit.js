/**
 * Created by onelife on 2017/11/11.
 */
var fortune = require('../../libs/fortune.js');
var expect = require('chai').expect;
suite('Fortune cookes tests', function () {
    test('getFortune() should return a fortune', function () {
        expect(typeof fortune.getFortune() === 'string');
    });
});
