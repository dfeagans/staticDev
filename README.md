staticDev
=========

####Static Node Web Server

This is the node server I use to demo static web documents. It's also a quick way to get little files off the server.
Just put it into the directory you want to serve up, then run using: `node web.js`.

You have to install Express first, so just `npm install express` before doing `node web.js`.
    
The default settings are the root domain and on the 8080 port.

**Update: The app.configure method has been discontinued as of Express 4.0. Reading the API reference, the configure method was intended to help you set-up the app for different environments (dev, production, etc.). I didn't specify an environemt, so it was really just saying for all environments, provide all the resources in this directory. The fix was just to remove the app.configure method completely.**

D
