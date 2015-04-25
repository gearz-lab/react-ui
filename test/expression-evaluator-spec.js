import expressionEvaluator from '../src/lib/expression-evaluator.js';

describe('Expression evaluator', function () {
    describe('Literals', function () {
        it('Should evaluate literals', function () {
            assert.strictEqual(expressionEvaluator.evaluate('1 + 1'), 2);
        });
        it('Should evaluate boolean operations', function () {
            assert.strictEqual(expressionEvaluator.evaluate('true'), true);
        });
    });
});
