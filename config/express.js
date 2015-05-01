/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var express = require('express'),
    compress = require('compression')
;

module.exports = function() {
    var app = express();

    // Setup middleware based on configuration
    if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    // Load routing configuration
    require('../app/routes/index.server.route.js')(app);

    // Setup views rendering
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    // Setup static resources
    // CAUTION: always after routes
    // This order matters because if it were above it, Express would first try to look for HTTP request paths in the static files folder.
    // This would make the response a lot slower.
    app.use(express.static('./public'));

    // Return express app
    return app;
};