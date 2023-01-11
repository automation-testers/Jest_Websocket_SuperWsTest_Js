const request = require('superwstest');
const ws_const = require('../src/ws_const');
const payload_Wrap = require('../utils/payload');

describe('Superwstest lib', () => {

    it('communicates via websockets', async () => {
        //url of WebSocket api
        await request(ws_const.WS_BASE_URL1)
            // append method {eg.. (/login)}
            .ws('')
            .expectJson((actual) => (actual.event === 'info')) // function
            .sendJson(payload_Wrap.getWsPayload())
            .expectJson((actual) => (actual.event === 'subscribed' && actual.channel === 'status')) // function
            //Close Websocket
            .close()
            // assert if websocket is closed.
            .expectClosed();
    });
});