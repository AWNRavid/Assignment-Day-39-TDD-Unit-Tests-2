const httpMocks = require('node-mocks-http');
const mathHandler = require('../math.js');

test.each([
  [3, 3, 6],
  [-4, 2, -2],
  [0, 0, 0],
])('%d + %d return %d', async (first, second, result) => {
  const request = httpMocks.createRequest({
    method: 'POST',
    url: '/sum',
    body: {
      a: first,
      b: second,
    },
  });
  const response = httpMocks.createResponse();
  await mathHandler.sum(request, response);
  expect(response._getJSONData()).toEqual({
    //   Todo: belum implemen fungsi
    data: result,
    error: null,
  });
});
