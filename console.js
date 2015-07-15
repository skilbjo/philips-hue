var 
	repl = require('repl'),
	options = {
		prompt: 'node via stdin> ',
		input: process.stdin,
		output: process.stdout,
		useGlobal: true
	};

var c = function() {
	console.log('you called a function!');
};

var log = function(stdin) {
	console.log('you called a log! ...', stdin);
};

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

r = repl.start('> ');
r.context.log = log;
// repl.start(options).context.c = c;

// repl.start(options)


// .on('exit', function(){
// 	console.log('Got \'exit\' event from repl!');
// 	process.exit();
// });