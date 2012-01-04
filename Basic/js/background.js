/**
 * @param {Object} request Request object.
 * @param {MessageSender} sender Sender of Message.
 * @param {Function} sendResponse Response function to return message with.
 */
function onRequest(request, sender, sendResponse) {
    var method = request.method;

    if (method == 'devtools-request') {
        console.log('Background: processing request from devtools : ' + 'message is ' + request.message);
        sendResponse('hello to you too!');
    }
}

chrome.extension.onRequest.addListener(onRequest);
