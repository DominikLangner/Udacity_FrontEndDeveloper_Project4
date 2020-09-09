//// adding part to sent URL to server

const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    //console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
    //appropriately handle error
  }
};

function createAnswerText(apiData) {
  return `The sentiment analysis was completed. The results are with ${apiData.confidence}% confidence:
  Agreement: ${apiData.agreement}
  Subjectivity: ${apiData.subjectivity}
  Irony: ${apiData.irony}`;
}

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("url").value;

  let validUrl = Client.checkValidUrl(formText);
  console.log(validUrl);
  if (validUrl == true) {
    console.log("::: Form Submitted :::");

    postData("http://localhost:8081/test", { url: formText })
      //fetch("http://localhost:8081/test")
      // .then((res) => res.text())
      // .then((res) => res.json())
      .then(function (res) {
        let textanswer = createAnswerText(res);
        document.getElementById("results").innerText = textanswer;
        console.log(res);
      });
  }
}
export { handleSubmit };
export { createAnswerText };
