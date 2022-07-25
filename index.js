const express = require('express');
const path = require("path")
const app = express();
const axios = require("axios");

app.use('/' , express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
 var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

  axios.post(process.env.webhookURL, {
    content: ip
  });
  
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(3000, () => {
  console.log('server started');
});
