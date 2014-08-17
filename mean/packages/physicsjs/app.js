'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Physicsjs = new Module('physicsjs');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Physicsjs.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Physicsjs.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Physicsjs.menus.add({
    title: 'Physicsjs example page',
		roles: ['authenticated'],
    link: 'physicsjs example page',
    menu: 'main'
  });
	
	Physicsjs.aggregateAsset('js','physicsjs-full-0.6.0.js');
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Physicsjs.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Physicsjs.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Physicsjs.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Physicsjs;
});
