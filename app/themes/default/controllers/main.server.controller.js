/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

module.exports = function (req, res) {

    // Require the core controller
    var Controller = require('../../../core/controllers/core.server.controller')(req, res);

    // Add react components common to all pages
    Controller.addReactComponents([
        {
            require: 'page/header'
        },
        {
            require: 'page/footer'
        }
    ]);

    return Controller;
};