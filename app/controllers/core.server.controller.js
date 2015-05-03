/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var ReactFactory = require('../models/reactComponentFactory.model'),
    _ = require('lodash');

/**
 * All react components for a controller
 *
 * @type {Array}
 */
var reactComponents = [];

/**
 * Retrieve react component
 *
 * @returns {Array}
 */
var getReactComponents = function () {
    return reactComponents;
};

/**
 * Add a react component
 *
 * @param componentConfig
 * @private
 */
var _addReactComponent = function (componentConfig) {

    var component = ReactFactory(componentConfig);

    reactComponent = {
        id: component.id,
        component: component,
        props: componentConfig.props
    }

    reactComponents.push(reactComponent);
};

/**
 * Add several react components
 *
 * @param components
 */
var addReactComponents = function (components) {
    if (components instanceof Array) {
        _.forEach(components, function (component) {
            _addReactComponent(component)
        })
    }
    else {
        _addReactComponent(components);
    }
};

/**
 * Render wrapper including react components
 *
 * @param req
 * @param res
 * @param view
 * @param data
 */
var render = function (req, res, view, data) {

    // Create info for react components
    var allProps = {};
    var components = {};
    _.forEach(reactComponents, function (reactComponent) {
        components[reactComponent.id] = reactComponent.component.component;
        allProps[reactComponent.id] = reactComponent.props;
    });
    data.react = components;
    data.react._allProps = JSON.stringify(allProps);

    // Render for real
    res.render(view, data);
};

/**
 * Add common components
 */
addReactComponents([
    {
        require: 'page/header'
    },
    {
        require: 'page/footer'
    }
]);

module.exports = {
    getReactComponents: getReactComponents,
    addReactComponents: addReactComponents,
    render: render
}