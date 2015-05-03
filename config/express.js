/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var config = require('./config'),
    express = require('express'),
    compress = require('compression'),
    exphbs = require('express-handlebars'),
    i18n = require('i18next'),
    favicon = require('serve-favicon'),
    morgan = require('morgan')
;

module.exports = function() {
    var app = express();

    /**
     * Set theme
     */
    app.set('theme', config.theme);

    /**
     * Setup middleware based on configuration
     */
    if (process.env.NODE_ENV === 'production') {
        app.use(compress()); // Compress response in gzip
        app.enable('view cache'); // Cache views
    }
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }

    /**
     * Init i18next for translations
     */
    i18n.init({
        //debug: true, // Uncomment for debugging
        resGetPath: './app/themes/' + app.get('theme') + '/locales/__lng__/__ns__.json' // Set path to translation json files
    });
    app.use(i18n.handle);

    /**
     * Load routing configuration
     */
    require('../app/themes/'+ app.get('theme') + '/routes/index.server.route.js')(app);

    /**
     * Setup views rendering
     */
    app.set('views', './app/themes/' + app.get('theme') + '/views');
    app.engine('hbs', exphbs({
        layoutsDir: './app/themes/' + app.get('theme') + '/views/layouts/',
        partialsDir: './app/themes/' + app.get('theme') + '/views/partials/',
        defaultLayout: '1-column',
        helpers: {
            __: function(i18n_key) { return i18n.t(i18n_key) } // Create a helper for translations
        },
        extname: '.hbs'})
    );
    app.set('view engine', 'hbs');

    /**
     * Setup favicon
     */
    app.use(favicon('./public/' + app.get('theme') + '/img/favicon.ico'));

    /**
     * Setup static resources
     *
     * CAUTION: always after routes
     * This order matters because if it were above it, Express would first try to look for HTTP request paths in the static files folder.
     * This would make the response a lot slower.
     */
    app.use(express.static('./public/' + app.get('theme')));

    /**
     * Register i18next for app
     */
    i18n.registerAppHelper(app);

    /**
     * Return express app
     */
    return app;
};