function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("url").value;
  console.log(url);

  let validUrl = Client.checkValidUrl(formText);
  console.log(validUrl);
  if (validUrl == true) {
    console.log("::: Form Submitted :::");
    fetch("http://localhost:8081/test")
      .then((res) => res.text())
      //  .then((res) => res.json())
      .then(function (res) {
        document.getElementById("results").innerText = res;
        console.log(res);
      });
  }
}
export { handleSubmit };
