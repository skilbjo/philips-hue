var hue = require("node-hue-api"),
	_ = require('underscore');

var displayBridges = function(bridge) {
    console.log("Hue Bridges Found: " + JSON.stringify(bridge));
};

// --------------------------
// Using a promise
hue.nupnpSearch().then(displayBridges).done();

// --------------------------
// Using a callback
hue.nupnpSearch(function(err, result) {
    if (err) throw err;
    displayBridges(result);
});

/*
var HueApi = require("node-hue-api").HueApi;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var hostname = "192.168.2.129",
    username = "08a902b95915cdd9b75547cb50892dc4",
    api;

api = new HueApi(hostname, username);

// --------------------------
// Using a promise
api.config().then(displayResult).done();
// using getConfig() alias
api.getConfig().then(displayResult).done();

// --------------------------
// Using a callback
api.config(function(err, config) {
    if (err) throw err;
    displayResult(config);
});
// using getConfig() alias
api.getConfig(function(err, config) {
    if (err) throw err;
    displayResult(config);
});

*/

