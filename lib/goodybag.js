'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _resourceresolver = require('./resourceresolver');

var _resourceresolver2 = _interopRequireDefault(_resourceresolver);

var _dexie = require('dexie');

var _dexie2 = _interopRequireDefault(_dexie);

var ResourceDB = new _dexie2['default']('ResourceDatabase');

exports['default'] = {
	loadResource: function loadResource(url) {},

	ResourceResolver: _resourceresolver2['default']
};
module.exports = exports['default'];