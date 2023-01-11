//const  faker  = require('faker');

module.exports = {

    // Payload
    getPayload(name, email, gender, status) {

        return {
            "name": name,
            "email": email,
            "gender": gender,
            "status": status
        }
    },

    // Payload
    getWsPayload() {

        return {
            event: "subscribe",
            channel: "status",
            key: "deriv:tBTCF0:USTF0"

        }
    }
}