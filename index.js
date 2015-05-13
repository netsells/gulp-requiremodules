var _   = require('lodash');

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '').replace(/\W/g, '');
}

module.exports = function(modules)
{
    var $ = [];

    _.forEach(modules, function(key, n) {
        if (key.substr(0, 5) == 'gulp-') {
            plugin = camelize(key.substring(5));
        } else {
            plugin = camelize(key);
        }
        $[plugin] = require(key);
    });
    
    return $;
}