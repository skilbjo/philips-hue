var hueApi = require("node-hue-api").HueApi,
	_ = require('underscore'),
    hostname = '192.168.1.111',
    username = '1492127e81dcdc7bf37e922a9871eb',
    userDescription = 'macbook',
    hue = new hueApi(hostname, username);

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var displayError = function(e){
    console.log(e);
};

// display infos
hue.config().then(displayResult).done();

