React-UI
===

![travis](https://travis-ci.org/gearz-lab/react-ui.svg?branch=master)

Bootstrap based data components for React. Check out the [website](http://reactui.com).

Installing
---

You can import the lib as AMD modules, CommonJS modules, or as a global JS script.

First add the Bootstrap CSS to your project; check [here](http://getbootstrap.com/getting-started/) if you have not already done that. Then:

**CommonJS**

Installing:

      $ npm install react
      $ npm install reactui
      
Using:
      
      var Textbox = require('reactui/lib/Textbox');
      // or
      var Textbox = require('reactui').Textbox;
      
**AMD**

Installing:

    $ bower install react
    $ bower install reactui
    
Using:

    define(['reactui/lib/Textbox'], function(Alert) { ... });
    // or
    define(['reactui'], function(ReactUI) { var Textbox = ReactUI.Textbox; ... });
    
**Browser globals**

Installing:

Include the file `react-ui.js` or `react-ui.min.js` from the `dist` folder into your app. All components are exported
to the `window.ReactUI` global.

Using:

    var Textbox = ReactUI.Textbox;

Building
---

Make sure you have `Git` and `Node.js` installed.

Clone the rep:

    $ git clone https://github.com/gearz-lab/react-ui.git

Install Webpack:

    $ npm install -g webpack

Install local dependencies:

    $ npm install

Build:

    $ npm run build
    
Build docs only

    $ npm run docs-build
    
Run the docs:

    $ npm run docs
