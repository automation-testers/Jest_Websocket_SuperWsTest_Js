const request = require('superwstest');
const ws_const = require('../src/ws_const');
// import { ws_const } from "../src/ws_const";
describe('Superwstest lib', () => {
    it('communicates via websockets', async () => {

        // url of WebSocket api
        await request(ws_const.WS_BASE_URL)
            // append method {eg.. (/login)}
            .ws('')
            //Send Message(Payload)
            .sendText('foo')
            // considering echo web socket expect same message
            .expectText('foo')
            .sendText('abc')
            .expectText('abc')
            //Close Websocket
            .close()
            // assert if websocket is closed.
            .expectClosed();
    });
});