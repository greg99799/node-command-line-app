
var profile = require("./profile")
// console.dir(process)

// var users = ["gregknudsen123", "chalkers", "gregknudsen"];
var myArgs = process.argv.slice(2);
myArgs.forEach(profile.getTheThingy);

