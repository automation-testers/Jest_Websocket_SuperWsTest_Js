'use strict';

const http_const = require('../src/http_const');
// import {http_const} from "../src/http_const";

const api = require('../src/app');

let accessToken = http_const.ACCESS_TOKEN;
let res;

describe('The App component', function () {

    // test case for an https POST API
  
  
  test('1 - Create users - POST', async function () {
    res = await api.UploadFormFile();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });

  test('2 - Create users - POST', async function () {
    res = await api.UploadFormData();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });

  test('3 - Create users - POST', async function () {
    res = await api.UploadFormDataFile();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });

  test('4 - Create users - POST', async function () {
    res = await api.UploadWithType();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });
  
  test('5 - Create users - POST', async function () {
    res = await api.UploadurlencodedFile();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });

  
  test('6 - Create users - POST', async function () {
    res = await api.UploadWithTypeAndEncodeUrl();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });

});