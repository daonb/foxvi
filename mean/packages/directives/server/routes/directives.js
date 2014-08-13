'use strict';

var directives = require('../controllers/directives');

var hasAuthorization = function (req, res, next) {
  next();
};

// The Package is past automatically as first parameter
module.exports = function(Directives, app, auth, database) {

  app.route('/d')
    .get(directives.all)
    .post(auth.requiresLogin, directives.create);
  app.route('/d/:dId')
    .get(directives.show)
    .put(auth.requiresLogin, hasAuthorization, directives.update)
    .delete(auth.requiresLogin, hasAuthorization, directives.destroy);

  app.param('dId', directives.directive);

  // TODO: remove sample routing code
  app.get('/d/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/d/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/d/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/d/example/render', function(req, res, next) {
    Directives.render('index', {
      package: 'directives'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
