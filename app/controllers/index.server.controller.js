/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

exports.render = function (req, res) {

    // Require the core controller
    var Controller = require('./core.server.controller')(req, res);

    // Add some react component
    Controller.addReactComponents({
        require: 'some/component',
        props: {
            text: 'Component text'
        }
    })

    Controller.render('index', {
        title: 'Page title'
    });
};