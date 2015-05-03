/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var express = require('express');

 module.exports = function(app) {

     var router = express.Router();

     var index = require('../controllers/index.server.controller');
     router.get('/', index.render);

     // Apply the routes to our application
     app.use('/', router);
 };