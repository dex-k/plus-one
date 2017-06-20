var express = require('express');
var app = express();


app.use( express.static( __dirname + '/public/project' ) );

if (typeof process.env.C9_HOSTNAME !== 'undefined') {
  console.log('Your code is running at https://' + process.env.C9_HOSTNAME);
  app.listen(process.env.PORT, process.env.IP);
} else {
  console.log('Your code is running at http://localhost:3000');
  app.listen(3000);
}
