'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _resourceresolver = require('./resourceresolver');

var _resourceresolver2 = _interopRequireDefault(_resourceresolver);

var _dexie = require('dexie');

var _dexie2 = _interopRequireDefault(_dexie);

var db = new _dexie2['default']('ResourceDatabase');
db.version(1).stores({
	resources: 'url, resource'
});
db.open();

exports['default'] = {
	addResource: function addResource(url) {
		db.resources.add({
			url: url,
			resource: 'hello world'
		});
	},
	loadResource: function loadResource(url) {
		db.resources.where('url').equals(url).first().then(function (result) {
			debugger;
		})['catch'](function (err) {
			debugger;
		});
	},

	ResourceResolver: _resourceresolver2['default']
};
module.exports = exports['default'];