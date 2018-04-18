const glob = require('glob')

module.exports = {
    getEntries: function (globPath) {
        var files = glob.sync(globPath),
            entries = {};

        files.forEach(function (filepath) {
            var split = filepath.split('/');
            var name = split[split.length - 3];

            entries[name] = filepath;
        });
        return entries;
    }
}