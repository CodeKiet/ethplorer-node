var ethplorerClient = require('../index.js');
// Public API
var api_key="freekey";
var client = new ethplorerClient();
var limit="5";
// client.getTokenHistory(limit,function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);
// });

var criteria="cap";
var limit="5";
client.getTop(api_key,criteria,limit,function (error, data) {
	if(error) console.log("E!",error)
	console.dir(data);
});
