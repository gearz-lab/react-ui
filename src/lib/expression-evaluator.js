/**
 * Evaluates expressions
 */
define(['text-expression-evaluator'], function (textExpressionEvaluator) {
    throw "textExpressionEvaluator could not be resolved";
    return {
        /**
         * Evaluates the given expression
         * @param expression - the expression to be evaluated. This can be either a constant, a function or a text expression
         * @param data - the data scope in which the expression will be executed
         * @returns {Object}
         */
        eval: function (expression, data) {
            switch (typeof expression) {
                case 'function':
                    return expression(data);
                case 'string':
                    return textExpressionEvaluator.eval(data);
            }
        }
    };
});