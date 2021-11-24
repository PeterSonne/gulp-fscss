# About

This package is greatly inspired by grunt-fscss and gulp-cmsref. It is a simple gulp plugin replacing css media urls by FirstSpirits $CMS_REF()$ function call and also adds options like "abs:2".

Feel free to request any feature!

## Install

Simply run in your npm project dir:
```
npm install gulp-fscss --save-dev 
```
Now this plugin is added to your package.json and can be used.

## How to use

Since this is a gulp plugin, which is a great task runner for npm projects, you should be familiar with gulp and Gulpfile.js (https://gulpjs.com/docs/en/getting-started/quick-start). Make sure you get this started first.

Now, you have a Gulpfile.js and some tasks to do and most likely there are some CSS files with urls you want to replace. The logic is simply:

```javascript
// import the plugin
const gulpFsCss = require('gulp-fscss');

// ...

// somewhere e.g. in a registered task
gulp
	.src('src/css/myFolder/someCssFile.css')
	.pipe(gulpFsCss())
	.pipe(gulp.dest('dist/css'));
```
This basic example takes the file ```someCssFile.css```, replaces the urls and saves it in the destination directory ```dist/css```.

If you need parameters like ```abs:2``` (see https://docs.e-spirit.com/odfs/template-develo/template-syntax/instructions/cms_ref/index.html#Text_Bild_5) you can simply pass them as an options object to the plugin function:
```javascript
// import the plugin
const gulpFsCss = require('gulp-fscss');

// ...

// somewhere e.g. in a registered task
gulp
	.src('src/css/myFolder/someCssFile.css')
	.pipe(gulpFsCss({abs:2}))
	.pipe(gulp.dest('dist/css'));
```
Note: Currently only ```abs``` is supported - if you need other parameters please send an issue on github - I'll gladly add them
