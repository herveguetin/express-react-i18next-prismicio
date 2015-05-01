/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

require("node-jsx").install({
    harmony: true,
    extension: ".js"
});

var React = require('react'),
    Header = React.createFactory(require('../views/app'));

exports.render = function(req, res) {

    var header = React.renderToString(Header());

    res.render('index', {
        title: 'Hello World view',
        header: header
    });
};