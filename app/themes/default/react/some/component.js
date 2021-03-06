/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var React = require('react');

// SomeComponent component
var SomeComponent = React.createClass({

    render: function () {
        return (
            <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.text} &raquo;</a></p>
        )
    }
});

module.exports = {
    id: 'some_component',
    component: SomeComponent
};