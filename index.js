const express = require("express");
const cors = require("cors");
const ip = require("request-ip");
const port = "3000";
const app = express();

app.enable("trust proxy");
app.get("/api/whoami", (req, res) => {
  var ipadress = ip.getClientIp(req)
  var language = req.acceptsLanguages();
  var software = req.get("User-Agent");
  res.json({
    ipaddress: ipadress,
    language: language[0],
    software: software,
  });
});

app.listen(port, () => {
  console.log(`Runn on port ${port}`);
});
