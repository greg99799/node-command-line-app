
//Problem: We need a simple way to look at a user's badge count and JS points
//Solution: Use Node.js to connect to Treehouse api to get get profile information to print out

var http = require("http");
var username = "chalkers";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) amd " + points + " points in Javascript.";
  console.log(message);
}

//Connect to API URL (http://teamtreehouse.com/username.json)
var request = http.get('teamtreehouse.com/' + username + '.json', function(response){
  console.dir(response.statusCode);
//Read the data

//Parse the data
//Print the data
});

request.on("error", function(error){
  console.log("Problem with request: " + error.message);
});
