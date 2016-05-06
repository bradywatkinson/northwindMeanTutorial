'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Product = mongoose.model('Product'),
    _ = require('lodash');

/**
 * Create a Category
 */
exports.create = function(req, res) {
	var category = new Product(req.body);

	category.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.status(201).json(category);
		}
	});
};

/**
 * Show the current Product
 */
exports.read = function(req, res) {

};

/**
 * Update a Product
 */
exports.update = function(req, res) {

};

/**
 * Delete an Product
 */
exports.delete = function(req, res) {

};

/**
 * List of Products
 */
exports.list = function(req, res) {

};