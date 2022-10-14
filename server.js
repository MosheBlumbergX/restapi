// server.js
const express = require("express");
const app = express();
bodyParser = require('body-parser');
fs = require('fs');

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true })); 

//tell express what to do when the /about route is requested
app.post('/messages',function (req, res) {
	//create a json response
	requestAsJson = JSON.stringify(req.body);
	//set the appropriate HTTP header
	res.setHeader('Content-Type', 'application/json');

	//log the output
	console.log('The POST data received was: ' + requestAsJson);

	//send the POST data back as JSON
	res.end(requestAsJson);

    fs.appendFile('log.txt', requestAsJson + '\n', function (err) {
    if (err) {
        // append failed
    } else {
        // done
    }
    })

});


app.get('/messagesfromtopic', (req, res, next) => {
    const fileStream = fs.createReadStream(
      'log.txt',
    );
    fileStream.pipe(res);
  });

  
app.listen(80, () => {
  console.log("Server running on port 80");
});