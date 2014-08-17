'use strict';

// The Package is past automatically as first parameter
module.exports = function(Physicsjs, app, auth, database) {

  app.get('/physicsjs/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/physicsjs/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/physicsjs/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/physicsjs/example/render', function(req, res, next) {
    Physicsjs.render('index', {
      package: 'physicsjs'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
