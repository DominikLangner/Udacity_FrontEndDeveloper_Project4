const urlChecker = require("../src/client/js/urlChecker");

{
  //Testing different variations of the URL

  test("URL has to start with www.", () => {
    expect(urlChecker.checkValidUrl("www.test.com")).toBe(true);
  });

  test("or URL has to start with http", () => {
    expect(urlChecker.checkValidUrl("http://test.com")).toBe(true);
  });

  test("or URL has to start with https", () => {
    expect(urlChecker.checkValidUrl("https://test.com")).toBe(true);
  });

  test("or URL has to start with http://www.", () => {
    expect(urlChecker.checkValidUrl("http://www.test.com")).toBe(true);
  });

  test("or URL has to start with https://www.", () => {
    expect(urlChecker.checkValidUrl("https://www.test.com")).toBe(true);
  });

  test("URL must not begin with anything but www. / http: / https:", () => {
    expect(urlChecker.checkValidUrl("test.com")).toBe(false);
  });

  test("URL's domain name must not start with special characters 1", () => {
    expect(urlChecker.checkValidUrl("http://-test.com")).toBe(false);
  });

  test("URL's domain name must not start with special characters 2", () => {
    expect(urlChecker.checkValidUrl("http://?.com")).toBe(false);
  });

  test("URL's domain name must not start with special characters 3", () => {
    expect(urlChecker.checkValidUrl("http:///.com")).toBe(false);
  });

  test("URL's domain name must not start with special characters 2", () => {
    expect(urlChecker.checkValidUrl("http://=abc.com")).toBe(false);
  });

  test("URL must not end with a special characters 1", () => {
    expect(urlChecker.checkValidUrl("http://www.test.com?")).toBe(false);
  });

  test("URL must not end with a special characters 2", () => {
    expect(urlChecker.checkValidUrl("http://www.test.com/=")).toBe(false);
  });
}
