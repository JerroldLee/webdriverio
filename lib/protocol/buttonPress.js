/**
 *
 * Click any mouse button (at the coordinates set by the last moveto command). Note
 * that calling this command after calling buttondown and before calling button up
 * (or any out-of-order interactions sequence) will yield undefined behaviour).
 *
 * @param {Number} button  Which button, enum: *{LEFT = 0, MIDDLE = 1 , RIGHT = 2}*. Defaults to the left mouse button if not specified.
 * @callbackParameter error, response
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/click
 * @type protocol
 *
 */

var handleMouseButtonProtocol = require('../helpers/handleMouseButtonProtocol');

module.exports = function buttonPress (button) {

    handleMouseButtonProtocol.call(
        this,
        '/session/:sessionId/click',
        button, arguments[arguments.length - 1]
    );

};
