'use strict';

module.exports = function (app) {

    var globals = require('./global');

    app.get('/', function (request, response) {

        response.render('index');
    });


    app.post('/api/upload', function (request, response) {

        if (globals.uploadDone == true) {

            console.log(request.files);
            response.render('index');
            response.end("File uploaded.");
        }
    });
}
