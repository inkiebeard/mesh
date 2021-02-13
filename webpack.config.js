const path = require('path');

module.exports = {
    entry: './src/mesh.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.mesh.js',
    },
};