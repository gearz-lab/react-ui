/**
 * Evaluates text expressions
 */
define([], function () {
    return {
        /**
         * Evaluates the given text expression
         * @param expression - the text expression
         * @param data - the data scope in which the expression will be executed
         * @returns {Object}
         */
        eval: function (expression, data) {
            // contains all variable statements. Each variable in 'data' will result in a declaraction statement.
            // example: if, data is { x : 1 }, variableDeclarations will contain: 'var x = 1'
            // I didn't necessarily have to use these declarations, because the scope of 'eval' is the current scope,
            // that is, I could just put the 'data' first level variables in scope inside this function and it would work,
            // but it would be EXTREMELY unsafe.
            // However, eval will not use the outside scope if it's in 'use strict' mode.
            var variableDeclarations = [];
            var finalExpression = '\'use strict\';\n';
            if (data) {
                for (var prop in data) {
                    variableDeclarations.push('var ' + prop + ' = ' + JSON.stringify(data[prop]) + ';\n');
                }
            }
            for (var i = 0; i < variableDeclarations.length; i++) {
                finalExpression += variableDeclarations[i];
            }
            finalExpression += expression;
            return eval(finalExpression);
        }
    };
});