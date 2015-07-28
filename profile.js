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


function get(userArray) {
  //Connect to API URL (http://teamtreehouse.com/username.json)
    for (i = 0; i < userArray.length; i++) {
      // console.log("I am " + userArray[i]);
      // console.log("I am the array: " + userArray);
      var request = http.get('http://teamtreehouse.com/' + userArray[i] + '.json', function(response){
        // console.log("I am from the web: " + userArray[i]);
        // console.log("I am the array from the web: " + userArray);
        // console.log("This is my request: " + request);
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
            // console.log(parsedBody.profile_name);
            //Print the data
            printMessage(parsedBody.profile_name, parsedBody.badges.length, parsedBody.points.JavaScript);
            // console.log("I am " + userArray[i]);
          } catch (error) {
              //Parse Error
              printError({message: "parsing error"});
            }  
        } else {
            //Status Code error
            printError({message: "There was an error in getting profile " + userArray[i]});
        }
      });
      // console.log(response.statusCode)
      request.on("error", printError);
    });
  } 
  
}

module.exports.getTheThingy = get;