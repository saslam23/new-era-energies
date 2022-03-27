     
require('dotenv').config();
const express = require('express');
const sslRedirect = require("heroku-ssl-redirect");
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sslRedirect());
const PORT = process.env.PORT || 8000

if(process.env.NODE_ENV === "production"){
    app.use(express.static( "new-era-solar-client/build"));
  
    app.get("*", (req,res) => {
      res.sendFile(path.join(__dirname, "new-era-solar-client", "build", "index.html"))
    })
  }
  

  app.listen(PORT, () => {
    console.log(`server has started successfully on ${PORT}`);
  });