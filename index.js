var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.readFile('./text.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./text.txt', '\nA tak wyglądają po zapisie!', function(err) {
    	if (err) throw err; 
    	console.log('Zapisano!'.blue);
    	fs.readFile('./text.txt', 'utf-8', function(err, data) {
    		console.log('Dane po zapisie!'.blue);
    		console.log(data);	
    	});
	});
});

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readdir('../File system', 'utf-8', function(err, files) {
	console.log('files');

	for (var i=0; i<files.length; i++) {
		console.log(files[i]);
	}

	fs.writeFile('message.txt', [files], function(err) {
  		if (err) throw err;
  		console.log('Zapisano!');
    	fs.readdir('./message.txt', 'utf-8', function(err, data) {
    		console.log(data);	
    	});
	});
});






