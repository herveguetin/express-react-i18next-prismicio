/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

// Make node interpret jsx
require("node-jsx").install({
    harmony: true,
    extension: ".js"
});

var React = require('react');

// Create React component
var make = function(componentConfig) {
    var component = require('../react-components/' + componentConfig.require);
    var reactComponent = React.createFactory(component.component);
    reactComponent = {
        id: component.id,
        component: '<div id="' + component.id + '">' + React.renderToString(reactComponent(componentConfig.props)) + '</div>'
    };

    return reactComponent;
};

module.exports = make;