'use strict';

const PeopleHR = require('../peoplehr-api').default;

const apiKey = 'THIS_IS_A_TEST_KEY';

test('Can instanstiate library with apiKey parameter', () => {
  const peoplerhr = new PeopleHR(apiKey);
  expect(peoplerhr).toBeInstanceOf(PeopleHR);
});

test('Can instanstiate library with process.env.PEOPLEHR_API_KEY', () => {
  process.env.PEOPLEHR_API_KEY = apiKey;
  const peoplerhr = new PeopleHR();
  expect(peoplerhr).toBeInstanceOf(PeopleHR);
});

test('Can instanstiate library with process.env.REACT_APP_PEOPLEHR_API_KEY', () => {
  process.env.REACT_APP_PEOPLEHR_API_KEY = apiKey;
  const peoplerhr = new PeopleHR();
  expect(peoplerhr).toBeInstanceOf(PeopleHR);
});
