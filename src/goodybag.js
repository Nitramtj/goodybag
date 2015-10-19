import ResourceResolver from './resourceresolver';
import Dexie from 'dexie';

var db = new Dexie('ResourceDatabase');
db.version(2).stores({
	resources: 'url, resource'
});
db.open();

export default {
	addResource: function(url) {
		db.resources.add({
			url: url,
			resource: 'hello world'
		});
	},
	loadResource: function(url) {
		db.resources.where('url').equals(url).first()
			.then(function(result) {
				debugger;
			})
			.catch(function(err) {
				debugger;
			});
	},
	
	ResourceResolver: ResourceResolver
};