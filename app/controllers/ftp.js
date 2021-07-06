/*
var Client = require('ftp');
var fs = require('fs');

var c = new Client();
c.on('ready', function() {
  c.put('foo.txt', 'foo.remote-copy.txt', function(err) {
    if (err) throw err;
    c.end();
  });
});

c.connect({
    host: '192.168.0.15',
    user: 'dgsc',
    password: '123@qwe',
});

*/