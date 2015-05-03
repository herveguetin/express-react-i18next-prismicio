/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var ReactFactory = require('../models/core.reactComponentFactory.model'),
    _ = require('lodash');

var App = require('../core.app');

/**
 * Express req & res objects
 */
var req,
    res;

/**
 * All react components for a controller
 *
 * @type {Array}
 */
var reactComponents = [];

/**
 * Set Express req & res
 *
 * @param req
 * @param res
 */
var setReqRes = function (eReq, eRes) {
    req = eReq;
    res = eRes;
};

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

    // Add translation to component
    if (!componentConfig.props) {
        componentConfig.props = {};
    }
    componentConfig.props.__ = req.i18n.t;

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
var render = function (view, data) {

    // Create info for react components
    var allProps = {};
    var components = {};
    _.forEach(reactComponents, function (reactComponent) {
        components[reactComponent.id] = reactComponent.component.component;
        allProps[reactComponent.id] = reactComponent.props;
    });
    data.react = components;
    data.react._props = JSON.stringify(allProps);

    // Render for real
    res.render(view, data);
};

module.exports = function (req, res) {

    setReqRes(req, res);

    var module = {
        getReactComponents: getReactComponents,
        addReactComponents: addReactComponents,
        render: render
    };

    return module;
};