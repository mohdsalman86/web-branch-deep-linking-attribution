/**
 * The default goog.json.parse uses eval. We don't want that.
 */
'use strict';

goog.provide('safejson');

/*jshint unused:false*/
goog.require('goog.json');

safejson.parse = function(sJSON) {
	sJSON = String(sJSON);
	try {
		return (typeof JSON === 'object' && typeof JSON.parse === 'function') ? JSON.parse(sJSON) : goog.json.parse(sJSON);
	}
	catch (e) {

	}

	throw Error("Invalid JSON string: " + sJSON);
};

