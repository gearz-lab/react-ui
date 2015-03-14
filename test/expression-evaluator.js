var requirejs = require("requirejs");
var assert = require("assert");
var should = require("should");
requirejs.config({
    baseUrl: 'src/lib',
    nodeRequire: require
});

describe('Expression evaluator', function () {

    var expressionEvaluator;
    before(function (done) {
        requirejs(['text-expression-evaluator'], function (d1) {
            expressionEvaluator = d1;
            done();
        });
    });

    describe('Literals', function () {
        it('should evaluate literals', function () {
            assert.strictEqual(2, expressionEvaluator.eval('1 + 1'));
        });
        it('should evaluate boolean operations', function () {
            assert.strictEqual(true, expressionEvaluator.eval('true'));
        });
    });
});