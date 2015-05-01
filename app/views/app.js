/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var React = require('react');

// Header component
var Header = React.createClass({

    componentDidMount: function() {
        console.log('mountent');
    },

    render: function() {
        return (
            <div>Header</div>
        )
    }
});

module.exports = Header;

if (typeof window !== "undefined") {
    React.render(<Header/>, document.getElementById('header'));
}