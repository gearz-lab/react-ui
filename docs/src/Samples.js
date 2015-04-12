/* eslint no-path-concat: 0, no-var: 0 */

export default {
      EditorsTextBoxBasicUsage: require('fs').readFileSync(__dirname + '/../examples/EditorsTextBoxBasicUsage.js', 'utf8'),
      EditorsTextBoxPrependAndAppend: require('fs').readFileSync(__dirname + '/../examples/EditorsTextBoxPrependAndAppend.js', 'utf8'),
      EditorsTextBoxPlaceholder: require('fs').readFileSync(__dirname + '/../examples/EditorsTextBoxPlaceholder.js', 'utf8'),
      EditorsTextBoxDisabledState: require('fs').readFileSync(__dirname + '/../examples/EditorsTextBoxDisabledState.js', 'utf8')
};
