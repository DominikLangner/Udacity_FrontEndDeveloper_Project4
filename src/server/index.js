const dotenv = require("dotenv");
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

var path = require("path");
const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

const fetch = require("node-fetch");

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  getSentiment(
    "https://www.cookingisajourney.com/post/khai-jiao-pu-krabben-omelette/"
  ).then((sentimentApiData) => {
    console.log(sentimentApiData);
    let answer = `The sentiment analysis was completed. The results are with ${sentimentApiData.confidence}% confidence:
    Agreement: ${sentimentApiData.agreement}
    Subjectivity: ${sentimentApiData.subjectivity}
    Irony: ${sentimentApiData.irony} 
    `;
    console.log(answer);
    res.send(answer);
    // res.send(sentimentApiData);
  });
});

// Async POST
const getSentiment = async (url) => {
  let apiCall =
    "https://api.meaningcloud.com/sentiment-2.1?key=" +
    process.env.API_KEY +
    "&of=json&url=" +
    url +
    "&lang=en";
  let request = await fetch(apiCall, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    // Transform into JSON
    const allData = await request.json();
    return allData;
  } catch (error) {
    console.log("error", error);
  }
};
