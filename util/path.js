const path = require('path');

//process is a global variable
module.exports = path.dirname(process.mainModule.filename);