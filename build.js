/*!
 * taskrjs
 * Copyright(c) 2011 Adam York
 * MIT Licensed
 */

var fs = require('fs');

fs.readFile('index.html', 'utf8', function(err, contents) {
    let uri = 'data:text/html,' + encodeURIComponent(contents);
    fs.readFile('README.md', 'utf8', (err, contents) => {
        let start = contents.indexOf('<pre>');
        let end = contents.lastIndexOf('</pre>');
        let left = contents.slice(0, start);
        let right = contents.slice(end + 6, contents.length);
        let output = left + '<pre>' + uri + '</pre>' + right;
        fs.writeFile('README.md', output, (err) => {
            if (err) {
                throw err;
            }
        });
    });
});