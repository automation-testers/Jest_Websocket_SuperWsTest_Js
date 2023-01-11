'use strict';

const { faker } = require('@faker-js/faker');

const http_const = require('../src/http_const');
const api = require('../src/app');
const payload_Wrap = require('../utils/payload');

let reporter;
let accessToken = http_const.ACCESS_TOKEN;
let res;
let payload;

describe('The App component', function () {
  
    // test case for an https POST API
  test('1 - Create users - POST', async function () {
    payload = payload_Wrap.getPayload(faker.random.words(1).substring(0, 29),
      faker.random.words(1).substring(0, 29) + "@waters-jast.co",
      "female", "inactive");
      res = await api.createUsers(payload, accessToken);
      expect(res.statusCode).toEqual(201);
  });

  // test case for an https get API
  test('2 - Get users - get', async function () {
    res = await api.getUsers();
    expect(res.statusCode).toEqual(200);
  });

});







