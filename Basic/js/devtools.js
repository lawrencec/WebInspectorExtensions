chrome.extension.sendRequest({
        method: 'devtools-request',
        tabId: webInspector.inspectedWindow.tabId,
        message: 'hello-world'
    },
    function(response) {
        console.log('Devtools: processing response from background : ' + 'message is ' + response);
    }
);
