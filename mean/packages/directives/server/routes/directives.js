'use strict';

// The Package is past automatically as first parameter
module.exports = function(Directives, app, auth, database) {

  app.get('/directives/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/directives/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/directives/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/directives/example/render', function(req, res, next) {
    Directives.render('index', {
      package: 'directives'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
