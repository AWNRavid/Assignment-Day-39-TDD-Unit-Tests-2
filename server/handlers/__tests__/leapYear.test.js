const httpMocks = require('node-mocks-http');
const mathHandler = require('../math.js');

test.each([
  [2022, false],
  [2024, true],
])('is %d a leap year? %s', async (first, result) => {
  const request = httpMocks.createRequest({
    method: 'GET',
    url: '/is-leap-year',
    body: {
      a: first,
    },
  });
  const response = httpMocks.createResponse();
  await mathHandler.leapYear(request, response);
  expect(response._getJSONData()).toEqual({
    data: result,
    error: null,
  });
});
