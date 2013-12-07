var test = require('tape');

var mem = require('./index.js');

test('Basic', function(t) {
    var keys = 'hostname,type,platform,arch,release'.split(',');
    mem(function(err, res) {
        t.ok(!err, 'There is no error');
        keys.forEach(function(key) {
            t.ok(res[key], key + ' is there');
        });
        t.end();
    });
});
