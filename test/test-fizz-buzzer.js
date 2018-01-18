// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzbuzzer
const fizzbuzzer = require('../fizzbuzzer');

// unit tests for our `fizzbuzzer` function
describe('fizzbuzzer', function () {

  // test the normal cases
  it('should return "fizz-buzz" for multiples of 15', function () {

    [15, 30, 60].forEach(function (input) {

      expect(fizzbuzzer(input)).to.equal('fizz-buzz');
    });
  });
  it('should return "fizz" for multiples of 3', function () {

    [3, 6, 18, 24].forEach(function (input) {

      expect(fizzbuzzer(input)).to.equal('fizz');
    });
  });
  it('should return "buzz" for multiples of 5', function () {

    [5, 10, 20].forEach(function (input) {

      expect(fizzbuzzer(input)).to.equal('buzz');
    });
  });
  it('should return a number if not a multiple of 3 or 5', function () {

    [4, 7, 8].forEach(function (input) {

      expect(fizzbuzzer(input)).to.equal(input);
    });
  });
  it('should raise error if args not numbers', function () {
    // range of bad inputs where input is not a number
    const badInputs = ['a', 'apple', true, false, function () {},
      [1, 2, 31]
    ];

    // prove that an error is raised for bad inputs
    badInputs.forEach(function (input) {
      expect(function () {
        fizzbuzzer(input);
      }).to.throw(Error);
    });
  });
});