const httpMocks = require('node-mocks-http');
const mathHandler = require('../math.js');
const mathModel = require("../../../storage/models/math.model");

jest.mock("../../../storage/models/math.model", () => {
  return {
      sum: jest.fn()
  };
})

test("[mock] data returned always '0'", async () => {
  const request = httpMocks.createRequest({
      method: "POST",
      url: "/sum",
      body: {
          a: 3,
          b: 10
      },
  });
  const response = httpMocks.createResponse();
  mathModel.sum.mockResolvedValue(0);
  await mathHandler.sum(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
      data: 0,
      error: null
  });
});