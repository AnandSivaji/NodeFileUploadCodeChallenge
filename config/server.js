'use strict';

exports.startServer = function(app, clusterMode) {

    var cluster = require('cluster');

    if (clusterMode && cluster.isMaster) {

        var cpuCount = require('os').cpus().length;

        for (var i = 0; i < cpuCount; i++) { cluster.fork(); }

        cluster.on('exit', function(worker) {

            console.log('Worker ' + worker.id + ' is being died :(');
            cluster.fork();
        });

    } else {

       app.app.listen(app.port);
       console.log('Running App Version ' + app.version + ' in ' + app.env + ' mode on port ' + app.port);
    }
}
