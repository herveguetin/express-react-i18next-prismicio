/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

// Set NODE_ENV if not set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Instantate express app
var express = require('./config/express');
var app = express();

// Define listening port on node
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port ' + 3000);

// Expose app
module.exports = app;