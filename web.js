var express = require('express');
var app = express();
app.configure(function () {
  app.use(
    "/",                             //end of URL path. Example: "/foo" here would make you retrieve the content using "www.domain.com/foo"                                                              
    express.static(__dirname)        //This line tells Node what directory to serve up, __dirname is a Node word for the directory this file exists in.                                                    
  );
});
app.listen(8080); //the port you want to use           
