const formHandler = require("../src/client/js/formHandler");

const mockApiAnswer = {
  confidence: "100",
  agreement: "AGREEMENT",
  subjectivity: "OBJECTIVE",
  irony: "NONIRONIC",
};

const expectedAnswer = `The sentiment analysis was completed. The results are with 100% confidence:
  Agreement: AGREEMENT
  Subjectivity: OBJECTIVE
  Irony: NONIRONIC`;

test("Testing createAnswerText", () => {
  // console.log(formHandler.createAnswerText(mockApiAnswer));
  // console.log(expectedAnswer);
  expect(formHandler.createAnswerText(mockApiAnswer)).toBe(expectedAnswer);
});
