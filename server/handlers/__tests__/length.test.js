const httpMocks = require('node-mocks-http');
const mathHandler = require('../math.js');

test.each([
    ['bagas', 5],
  ])('%s.length -> %d', async (first, result) => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/count-str',
      body: {
        a: first,
      },
    });
    const response = httpMocks.createResponse();
    await mathHandler.countStr(request, response);
    expect(response._getJSONData()).toEqual({
      //   Todo: belum implemen fungsi
      data: result,
      error: null,
    });
  });
  