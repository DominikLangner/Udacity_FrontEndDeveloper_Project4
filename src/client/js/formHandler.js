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
    const newData = await response.text();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
    //appropriately handle error
  }
};

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("url").value;
  console.log(url);

  let validUrl = Client.checkValidUrl(formText);
  console.log(validUrl);
  if (validUrl == true) {
    console.log("::: Form Submitted :::");

    postData("http://localhost:8081/test", { url: formText })
      //fetch("http://localhost:8081/test")
      // .then((res) => res.text())
      //  .then((res) => res.json())
      .then(function (res) {
        document.getElementById("results").innerText = res;
        console.log(res);
      });
  }
}
export { handleSubmit };
