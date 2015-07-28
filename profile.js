var http = require("http");


//Print out message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
  console.log(message);
}

//Print out error messages
function printError(error){
  console.error("We have a problem: " + error.message);
}


function get(user) {
  //Connect to API URL (http://teamtreehouse.com/username.json)
      var request = http.get('http://teamtreehouse.com/' + user + '.json', function(response){
      var body = "";
      //Read the data
      response.on('data', function(chunk){
        body += chunk;
        // console.log(body);
      });
      response.on('end', function(){
        if (response.statusCode === 200) {
          try {
            //Parse the data
            var parsedBody = JSON.parse(body); // DOES work! assign it to a variable ya jackass
            //Print the data
            printMessage(parsedBody.profile_name, parsedBody.badges.length, parsedBody.points.JavaScript);
          } catch (error) {
              //Parse Error
              printError({message: "parsing error"});
            }  
        } else {
            //Status Code error
            printError({message: "There was an error in getting profile " + user});
        }
      });
      // console.log(response.statusCode)
      request.on("error", printError);
    });
  } 
  

module.exports.getTheThingy = get;