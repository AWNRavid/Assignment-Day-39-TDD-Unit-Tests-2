const httpMocks = require('node-mocks-http');
const mathHandler = require('../math.js');

test.each([
  ['Minggu', true],
  ['Sabtu', true],
  ['Rabu', false],
])('hari %s bernilai %s', async (first, result) => {
  const request = httpMocks.createRequest({
    method: 'GET',
    url: '/is-weekend',
    body: {
      a: first,
    },
  });
  const response = httpMocks.createResponse();
  await mathHandler.weekend(request, response);
  expect(response._getJSONData()).toEqual({
    data: result,
    error: null,
  });
});
