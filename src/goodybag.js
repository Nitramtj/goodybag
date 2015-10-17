import ResourceResolver from './resourceresolver';
import Dexie from 'dexie';

var db = new Dexie('ResourceDatabase');
db.version(1).stores({
	resources: 'resource'
});
db.open();

export default {
	loadResource: function(url) {
		
	},
	
	ResourceResolver: ResourceResolver
};