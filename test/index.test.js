// test pairs
const values = require('./inputs.js');
// our module
const gulpFsCss = require('./../index.js');
// libs
var assert = require('assert');
//var es = require('event-stream');
var File = require('vinyl');
const { doesNotMatch } = require('assert');

describe('gulp-fscss', function() {
	describe('buffer test pairs', function() {

		values.forEach(function(e) {

			it('input-output pairs match test', function(done) {

				const fakeFile = new File({
					contents: Buffer.from(e.input)
				});
	
				const fsCssPlugin = gulpFsCss(e.options);
		
				fsCssPlugin.write(fakeFile)
	
				fsCssPlugin.once('data', function(file) {
					assert(file.isBuffer());

					const t = file.contents.toString('utf8')
					assert.equal(file.contents.toString('utf8'), e.output);
					done();
				})

				

			})
	
		})

	})
})
