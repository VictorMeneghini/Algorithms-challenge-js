const max = require('../src/challenge5');

describe("Max Character", () => {
  it("Should return max character", () => {
    expect(max("Hello World!"), "l");
  });
});