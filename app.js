'use strict';

var cluster = require('cluster');

if (cluster.isMaster) {

    var cpuCount = require('os').cpus().length;

    for (var i = 0; i < cpuCount; i += 1) { cluster.fork(); }

    cluster.on('exit', function(worker) {

        console.log('Worker ' + worker.id + ' is being died :(');
        cluster.fork();
    });

} else {

    var express = require('express');
    var app = express();

    app.get('/', function(request, response) {

        response.send('Hello World from the worker: ' + cluster.worker.id)
    });

    app.listen(3000);
    console.log('Worker ' + cluster.worker.id + ' is being started');
}
