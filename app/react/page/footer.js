/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var React = require('react');

// Footer component
var Footer = React.createClass({

    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {
        this.setState({
            footerTitle: this.props.__('page.copyright')
        })
    },

    render: function () {
        return (
            <div>{this.state.footerTitle}</div>
        )
    }
});

module.exports = {
    id: 'footer',
    component: Footer
};