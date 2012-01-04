PanelExample = function() {
    var config = {};

    function _parsePageInfo(result) {
        config.pageInfo = {
            href: result.href
        };
    }

    function _executeCommand(command) {
        return function(result, isException) {
            PanelExample.execute(command, result, isException);
        }
    }

    function _renderPageInfo() {
        document.getElementById('output').innerHTML = config.pageInfo.href;
    }

    return {
        initialise: function() {
            this.initPageInfo();
        },

        execute: function(command, result, isException) {
            if (isException)
                console.log('Exception occurred carrying out command');
            else
                switch (command) {
                    case 'windowInfo':
                        _parsePageInfo(result);
                        _renderPageInfo();
                        break;
                }
        },

        initPageInfo: function() {
            var inspectedWindow = chrome.experimental.devtools.inspectedWindow;
            config.tabId = inspectedWindow.tabId;
            inspectedWindow.eval(
                'window.location',
                _executeCommand('windowInfo')
            );
        }
    };
}();
