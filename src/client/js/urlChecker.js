function checkValidUrl(inputText) {
  console.log("::: Running checkValidUrl :::", inputText);

  var validURLregex = /\b((https?:\/\/)|www.)[a-zA-z0-9][\-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[a-zA-Z0-9\/]/gi;
  var matched = inputText.match(validURLregex);
  if (matched && matched.length > 0 && matched[0] == inputText) {
    console.log("--> valid URL");
    return true;
  } else {
    console.log("--> URL invalid");
    alert("Invalid URL: Please check your URL");
    return false;
  }
}

/*
  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  if (names.includes(inputText)) {
    alert("Welcome, Captain!");
  }
  */

export { checkValidUrl };
