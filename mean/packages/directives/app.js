'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Directives = new Module('directives');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Directives.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Directives.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Directives.menus
   .add({
    roles: ['authenticated'],
    title: 'Directives',
    link: 'all dirs'
   })
   .add({
    roles: ['authenticated'],
    title: 'Create New Directive',
    link: 'create dir'
   })
   .add({
    title: 'directives example page',
    link: 'directives example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use.
    // Save settings with callback
    // Use this for saving data from administration pages
    Directives.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Directives.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Directives.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Directives;
});
