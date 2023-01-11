// import { http_const } from "./http_const";
const http_const = require('../src/http_const');

const supertest = require('supertest');
const publicApi = supertest(http_const.HTTP_BASE_URL);
const formDataApi = supertest("https://api.upload.io/v2/accounts/W142haM/uploads");
const path = require('path')
// import path from 'path';


module.exports = {

    // API call for create user
    createUsers(payload, authorization) {
        return publicApi.post(encodeURI(`/users`))
            .set({ 'Content-Type': 'application/json' })
            .set({ 'Authorization': authorization })
            .send(payload)
    },
    // API call for get user
    getUsers() {
        return publicApi.get(`/users`)

            .set({ 'Content-Type': 'application/json' })
            .send()
    },

    //API for file in form
    UploadFormFile() {
        return formDataApi.post(`/form_data`)
            .set({ 'Authorization': 'Bearer public_W142haMDyQvs8UXRU2EPE3CgSCV4' })
            .set({ 'Content-Type': 'multipart/form-data' })
            .attach('avatar', path.resolve(__dirname, './uploads/image.jpg'))

    },
//API for adding text in form
    UploadFormData() {
        return formDataApi.post(`/form_data`)
            .set({ 'Authorization': 'Bearer public_W142haMDyQvs8UXRU2EPE3CgSCV4' })
            .set({ 'Content-Type': 'multipart/form-data' })
            .field('firstName', "Urmila")
    },

    // API for multimedia and text both
    UploadFormDataFile() {
        return formDataApi.post(`/form_data`)
            .set({ 'Authorization': 'Bearer public_W142haMDyQvs8UXRU2EPE3CgSCV4' })
            .set({ 'Content-Type': 'multipart/form-data' })
            .attach('avatar', path.resolve(__dirname, './uploads/image.jpg'))
            .field('firstName', "Urmila")
    },

    // API application/x-www-form-urlencoded


    UploadurlencodedFile(payload, authorization) {


        return formDataApi.post(`/form_data`)
            .set({ 'Authorization': 'Bearer public_W142haMDyQvs8UXRU2EPE3CgSCV4' })
            .set({ 'Content-Type': 'application/x-www-form-urlencoded' })
            .send(payload)
            .send(encodeURI(payload)) //1.1

    },


    // API application/x-www-form-urlencoded
    UploadWithType(payload, authorization) {

        //OPtion 1   
        return formDataApi.post(`/form_data`)
            .set({ 'Authorization': 'Bearer public_W142haMDyQvs8UXRU2EPE3CgSCV4' })
            .set({ 'Content-Type': 'application/x-www-form-urlencoded' })
            .type('form')
            .send(payload)    //1 
    },

    UploadWithTypeAndEncodeUrl(payload, authorization) {
        // //OPtion 2
        return formDataApi.post(`/form_data`)
            .set({ 'Authorization': 'Bearer public_W142haMDyQvs8UXRU2EPE3CgSCV4' })
            .set({ 'Content-Type': 'application/x-www-form-urlencoded' })
            .type('form')
            .send(encodeURI(payload)) //1.1 
    },


}
// .type('form')