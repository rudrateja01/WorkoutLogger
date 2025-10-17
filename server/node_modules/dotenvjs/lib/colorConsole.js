/**
 * Created by kishan on 8/10/15.
 */
var colors = require('./colors');


this.log = function(text) {
    console.log(colors.green('[OKAY] '+ text));
};

this.info = function(text) {
    console.log(colors.cyan('[INFO] ' + text));
};

this.warn = function(text) {
    console.warn(colors.yellow('[WARN] ' + text));
};

this.error = function(text) {
    console.error(colors.bright_red('[FAIL] ' + text));
};

this.verbose = function(text) {
    console.log(colors.blue('-> ' + text));
};

this.custom = function(color, type, text) {
    console.error(colors[color]('['+type+'] ' + text));
};


console.color = this;
module.exports = this;

