'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Directive = mongoose.model('Directive'),
  _ = require('lodash');


/**
 * Find directive by id
 */
exports.directive = function(req, res, next, id) {
  Directive.load(id, function(err, directive) {
    if (err) return next(err);
    if (!directive) return next(new Error('Failed to load directive ' + id));
    req.directive = directive;
    next();
  });
};

/**
 * Create an directive
 */
exports.create = function(req, res) {
  var directive = new Directive(req.body);
  directive.user = req.user;

  directive.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the directive '+err
      });
    }
    return res.json(directive);
  });
};

/**
 * Update an directive
 */
exports.update = function(req, res) {
  var directive = req.directive;

  directive = _.extend(directive, req.body);

  directive.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the directive'
      });
    }
    return res.json(directive);
  });
};

/**
 * Delete an directive
 */
exports.destroy = function(req, res) {
  var directive = req.directive;

  directive.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the directive'
      });
    }
    res.json(directive);

  });
};

/**
 * Show an directive
 */
exports.show = function(req, res) {
  res.json(req.directive);
};

/**
 * List of Directives
 */
exports.all = function(req, res) {
  Directive.find().sort('-created').populate('user', 'name username').exec(function(err, directives) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the directives'
      });
    }
    res.json(directives);

  });
};

