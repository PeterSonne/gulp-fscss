// test pairs
const values = require('./inputs.js');
// our module
const gulpFsCss = require('./../index.js');

test('Basic urls', () => {
    values.forEach(e => {
        // TODO: later...
        //expect(gulpFsCss(e.options)._transform(Buffer.from(e.input))).toEqual(Buffer.from(e.output))
    })
})