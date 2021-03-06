/**
 *
 * Returns a list of the currently active sessions. Each session will be returned
 * as a list of JSON objects with the following keys:
 *
 * | Key          | Type   | Description    |
 * |--------------|--------|----------------|
 * | id           | string | The session ID |
 * | capabilities | object | An object describing the [session capabilities](https://code.google.com/p/selenium/wiki/JsonWireProtocol#Actual_Capabilities) |
 *
 * @returns {Object[]} a list of the currently active sessions
 * @callbackParameter error, response
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/sessions
 * @type protocol
 *
 */

module.exports = function sessions () {

    var requestOptions = {
        path: '/sessions',
        method: 'GET',
        requiresSession: false
    };

    this.requestHandler.create( requestOptions, {}, arguments[arguments.length - 1]);

};
