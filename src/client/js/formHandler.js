function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test")
    .then((res) => res.text())
    //  .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerText = res;
      console.log(res);
    });
}
export { handleSubmit };
