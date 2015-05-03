/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var React = require('react'),
    _ = require('lodash');

/**
 * Load all React components
 */

// Create a webpack require context with all js files in ../react-components
var reactComponents = require.context('../react-components', true, /.js/);

// Loop on reactComponents.keys() (all required files)
_.forEach(reactComponents.keys(), function(file) {

    // Extract exported module from context
    var component = reactComponents(file);

    // Render component if its container is in the DOM
    if (document.getElementById(component.id)) {

        // ALL_PROPS var is a global var in DOM that is generated by the server
        // in order to make sure components are equal both on server and client.
        // @see app/models/reactComponentFactory.model.js
        React.render(
            React.createElement(component.component, ALL_PROPS[component.id]),
            document.getElementById(component.id)
        );
    }
});
