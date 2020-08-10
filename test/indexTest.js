const sinon = require('sinon');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    input = document.getElementById('input');
    sinon.spy(input, 'addEventListener');
  })


})
