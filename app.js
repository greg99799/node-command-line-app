
//Problem: We need a simple way to look at a user's badge count and JS points
//Solution: Use Node.js to connect to Treehouse api to get get profile information to print out

var http = require("http");
// var $ = require("jQuery");
var username = "gregknudsen";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) amd " + points + " points in Javascript.";
  console.log(message);
}

//Connect to API URL (http://teamtreehouse.com/username.json)
var request = http.get('http://teamtreehouse.com/' + username + '.json', function(response){
  var body = "";
  // console.log('HEADERS: ' + JSON.stringify(response.headers.server));
  response.setEncoding('utf8');
  //Read the data
  response.on('data', function(chunk){
    body += chunk;
    // console.log(body);
    // printMessage(username, chunk.badges, chunk.points.JavaScript)
  });
  response.on('end', function(){
    //Parse the data
    var parsedBody = JSON.parse(body); // DOES work! assign it to a variable ya jackass
    console.log(typeof parsedBody);
  });

//Print the data
});

request.on("error", function(error){
  console.error("Problem with connection: " + error.message);
});
