/* eslint no-path-concat: 0, no-var: 0 */

export default {
  ButtonTypes:                   require('fs').readFileSync(__dirname + '/../examples/ButtonTypes.js', 'utf8'),
  ButtonBlock:                   require('fs').readFileSync(__dirname + '/../examples/ButtonBlock.js', 'utf8'),
  ButtonActive:                  require('fs').readFileSync(__dirname + '/../examples/ButtonActive.js', 'utf8'),
  ButtonDisabled:                require('fs').readFileSync(__dirname + '/../examples/ButtonDisabled.js', 'utf8'),
  ButtonSizes:                   require('fs').readFileSync(__dirname + '/../examples/ButtonSizes.js', 'utf8'),
  ButtonTagTypes:                require('fs').readFileSync(__dirname + '/../examples/ButtonTagTypes.js', 'utf8'),
  ButtonLoading:                 require('fs').readFileSync(__dirname + '/../examples/ButtonLoading.js', 'utf8'),
  FormGroup:                     require('fs').readFileSync(__dirname + '/../examples/FormGroup.js', 'utf8')
};
