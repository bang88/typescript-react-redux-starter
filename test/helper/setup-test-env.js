/**
 * This is used to set up the environment that's needed for most
 * of the unit tests for the project which includes babel transpilation
 * with babel-register, polyfilling, and initializing the DOM with jsdom
 */
// require('babel-register')
// require('babel-polyfill')

global.document = require('jsdom').jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator


// polyfill: antd.js contain a polyfill but ava can't found it.
var matchMediaPolyfill = function matchMediaPolyfill() {
    return {
        matches: false,
        addListener: function addListener() { },
        removeListener: function removeListener() { }
    };
};
window.matchMedia = matchMediaPolyfill;