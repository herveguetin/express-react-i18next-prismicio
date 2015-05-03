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
    var Controller = require('./main.server.controller')(req, res);

    // Translator
    var __ = req.i18n.t;

    // Add some react component
    Controller.addReactComponents({
        require: 'some/component',
        props: {
            text: __('index.button')
        }
    })

    Controller.render('index', {
        title:  __('index.title')
    });
};