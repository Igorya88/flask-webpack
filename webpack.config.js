const path = require('path');

PATHS = {
    sources: path.join(__dirname, 'sources')
};

module.exports = {
    entry: {
        "index": path.join(PATHS.sources, 'pages', 'index', 'index.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};