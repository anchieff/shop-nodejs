const path = require('path')

// Все очень классно, но ссылается не на ту папку
module.exports = path.dirname(require.main.filename)