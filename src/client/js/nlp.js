function nlp(event) {
  var apiKey = process.env.API_KEY;
  console.log("npl-function ausgeführt");
  console.log("API-KEY is " + apiKey);
}

export { nlp };

/*
var your_api_key = process.env.API_KEY;
//var url = '';

var https = require('follow-redirects').https;
  var fs = require('fs');
const { url } = require('inspector');

  var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': '/sentiment-2.1?key='+your_api_key+'&url='+url;
    //&lang=<lang>&txt=<text>&model=<model>',
    'headers': {
    },
    'maxRedirects': 20
  };

  var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  req.end();
  */
