'use strict';

const fetchMock = require('fetch-mock');
const PeopleHR = require('../peoplehr-api').default;

const apiKey = 'THIS_IS_A_TEST_KEY';

process.env.test = true;

test('Can instanstiate library with apiKey parameter', () => {
  const phr = new PeopleHR(apiKey);
  expect(phr).toBeInstanceOf(PeopleHR);
});

test('Can instanstiate library with process.env.PEOPLEHR_API_KEY', () => {
  process.env.PEOPLEHR_API_KEY = apiKey;
  const phr = new PeopleHR();
  expect(phr).toBeInstanceOf(PeopleHR);
});

test('Can instanstiate library with process.env.REACT_APP_PEOPLEHR_API_KEY', () => {
  process.env.REACT_APP_PEOPLEHR_API_KEY = apiKey;
  const phr = new PeopleHR();
  expect(phr).toBeInstanceOf(PeopleHR);
});

test('Can call query', async () => {
  fetchMock.mock('*', {
    isError: false,
    Status: 0,
    Message: 'The request processed successfully.',
    Result: [{ EmployeeId: '123' }]
  });

  const phr = new PeopleHR(apiKey, fetchMock.sandbox());
  const response = await phr.query('Employee', 'GetAllEmployeeDetail', {
    IncludeLeavers: false
  });

  expect(response.isError).toBe(false);
  expect(response.Result[0].EmployeeId).toBe('123');
});
