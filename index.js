// ----------------------------------------------------------------------------
//
// cigar-plugin-os
//
// Copyright 2013 Andrew Chilton. All Rights Reserved.
//
// License: MIT
//
// ----------------------------------------------------------------------------

// core
var os = require('os');

// ----------------------------------------------------------------------------

module.exports = function(opts, callback) {
    process.nextTick(function() {
        callback(null, {
            hostname : os.hostname(),
            type     : os.type(),
            platform : os.platform(),
            arch     : os.arch(),
            release  : os.release(),
        });
    });
};

// ----------------------------------------------------------------------------
