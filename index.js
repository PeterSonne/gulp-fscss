const Transform = require('stream').Transform;
const reg = /(=|url\()(["'`]?){1}(?!\/\/)([a-z0-9_\/.-]+\.[a-z0-9]+)(?:[#?].+?)?\2/gim;
const defaultOptions = ['abs', 'contentId', 'index', 'lang', 'postfix', 'remote', 'res',
	'template', 'templateSet', 'version'];


module.exports = function(options = {}) {
    // get valid options
    const optionString = defaultOptions
        .filter(e => e in options)
        .map(e => `${e}:${typeof options[e] === 'number' ? options[e] : `"${options[e]}"` }`)
        .join(", "); // actually not needed, but for future maybe?

    // create stream transform instance
    const streamTransform = new Transform({objectMode: true});

    /**
     * 
     * @param {Buffer|string} file 
     * @param {string=} encoding 
     * @param {function(Error, object)} callback 
     */
     streamTransform._transform = function(file, encoding, callback) {
        if (file.isNull()) {
            // nothing to do
            return callback(null, file);
        }

        if (file.isStream()) {
            // do nothing, only return stream
            console.log("[Plugin gulp-fscss]: Cannot work with stream, buffer only")
            return callback(null, file);
        }
        
        if(file.isBuffer()) {
            let cssContent = String(file.contents);
            
            while((match = reg.exec(cssContent)) !== null) {
                if(!match) {return false;}
                const fileBasename = match[3]
                    .split('/')
                    .pop()
                    .split('.')
                    .shift()
                    .replace(/[^a-z0-9_]+/gi, '_')
                    .toLowerCase();

                cssContent = cssContent.replace(
                    match[0],
                    match[0].replace(
                        match[3],
                        `$$$$CMS_REF(media:"${fileBasename}"${
                            optionString ? `, ${optionString}` : ''
                        })$$$$`
                    )
                );
            };

            file.contents = Buffer.from(cssContent)
        }
        
        callback(null, file)
    }

    return streamTransform
}