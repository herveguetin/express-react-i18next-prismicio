/**
 * Hervé Guétin's blog
 *
 * @license http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author Hervé Guétin <@herveguetin> <herve.guetin@gmail.com>
 * @category Blog
 * @copyright Copyright (c) 2015 Hervé Guétin (http://www.herveguetin.com)
 */

var express = require('express'),
    _ = require('lodash');

 module.exports = function(app) {

     var router = express.Router();

     // Route middleware to check if requested path is a page. If so, send its content
     router.use(function(req, res, next) {
         var allowedPaths = ['doc', 'search'];

         if (_.indexOf(allowedPaths, _.trimLeft(req.path, '/')) !== -1) {
             res.send('OK');
         }

         next();
     });

     var index = require('../controllers/index.server.controller');
     router.get('/', index.render);

     // Apply the routes to our application
     app.use('/', router);
 };