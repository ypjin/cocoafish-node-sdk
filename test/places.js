var acs = require('../lib/acs');

//var sdk = acs.createCocoafish('');
var sdk = acs.createCocoafish('', '');
//var sdk = acs.createCocoafish('', '', '');

sdk.sendRequest('places/query.json', 'GET', {page:1, per_page:2}, function(data){
	console.log(JSON.stringify(data, null, 2));
}, true);
