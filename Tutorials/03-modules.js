//CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum amount of info, properties, and methods)

const name = require('./04-name')
const message = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')

// name
console.log(name.Shakira)
console.log(name.Pitbull)
// utils
message("Bernard")
// data
console.log(data.items[0])
console.log(data.marriedPerson)