/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

module.exports = {
    entry: ['./app/views/app.js'],
    output: {
        path: './public/js',
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader' }
        ]
    }
};