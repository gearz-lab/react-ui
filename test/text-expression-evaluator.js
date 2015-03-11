require("amd-loader");
var assert = require('assert')
var textExpressionEvaluator = require('../src/lib/text-expression-evaluator');

describe('Text expression evaluator', function() {
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