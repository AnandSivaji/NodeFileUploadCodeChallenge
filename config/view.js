'use strict';

module.exports = function(app, express) {

    app.app.set ('views', './views');

    app.app.set ('view engine', 'ejs');

    app.app.use(express.static(app.root + '/public'));
}
