
var profile = require("./profile")
// console.dir(process)

// var users = ["gregknudsen123", "chalkers", "gregknudsen"];
var users = process.argv.slice(2);
users.forEach(profile.getTheThingy);

