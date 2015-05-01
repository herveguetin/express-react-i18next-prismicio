/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var express = require('express');
var app = express();

app.use('/', function(req, res) {
    res.send('Hello World again');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port ' + 3000);

module.exports = app;