var requirejs = require("requirejs");
var assert = require("chai").assert;
var should = require("chai").should;
requirejs.config({
    baseUrl: 'src/lib',
    nodeRequire: require
});

describe('Text expression evaluator', function() {

    var textExpressionEvaluator;
    before(function (done) {
        requirejs(['text-expression-evaluator'], function (d1) {
            textExpressionEvaluator = d1;
            done();
        });
    });

    describe('Literals', function() {
        it('should evaluate number operations', function() {
            assert.strictEqual(2, textExpressionEvaluator.eval('1 + 1'));
        });
        it('should evaluate boolean operations', function() {
            assert.strictEqual(true, textExpressionEvaluator.eval('true'));
        });
    });
    describe('Variables', function() {
        it('should evaluate first level variales', function() {
            assert.strictEqual(2, textExpressionEvaluator.eval('x + 1', { x : 1 }));
        });
        it('should evaluate deep variables', function() {
            assert.strictEqual(2, textExpressionEvaluator.eval('x.y.z + 1', { x: { y: { z: 1 } } }));
        });
        it('should scape strings correctly', function() {
            assert.strictEqual('johnny', textExpressionEvaluator.eval('x.y.z + \'ny\'', { x: { y: { z: 'john' } } }));
        });
    });
});