import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";
import { nlp } from "./js/nlp";
//require("dotenv").config({ path: "../.env" });
//require("dotenv").config();

//console.log(checkForName);
console.log(process.env.API_KEY);

//alert("I EXIST");
//console.log("CHANGE!!");

export { checkForName, handleSubmit, nlp };
