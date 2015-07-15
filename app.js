var hueApi = require("node-hue-api").HueApi,
		_ = require('underscore'),
    hostname = '192.168.1.111',
    username = '1492127e81dcdc7bf37e922a9871eb',
    userDescription = 'macbook',
    hue = new hueApi(hostname, username),
    whiteState = hue.lightState.create().on().white(500, 100),
    state = hue.lightState.create();

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var displayError = function(e){
    console.log(e);
};

// display infos
hue.config().then(displayResult).done();

hue.fullState().then(displayResult).done();

hue.lights().then(displayResult).done();

hue.setLightState(4, whiteState).then(displayResult).done();

hue.setLightState(5, state.on()).done();

hue.setLightState(5, state.off()).done();
