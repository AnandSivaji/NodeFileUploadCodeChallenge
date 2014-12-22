'use strict';

module.exports = function(app, uploaded) {

    var multer = require('multer');
    var globals = require('./global');

    app.use(multer({

        dest: './uploads',

        rename: function(fieldName, fileName) {
            return fileName + '_' + (+ new Date());
        },

        onFileUploadStart: function(file) {
            console.log('Upload ' + file.originalname + ' is being started');
        },

        onFileUploadComplete: function(file) {

            console.log(file.fieldname + ' uploaded to  ' + file.path)
            globals.uploadDone = true;
        }
    }));
}
