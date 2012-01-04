# WebInspectorExtensions

I found the [official documentation and examples](http://code.google.com/chrome/extensions/experimental.html) for extending the web inspector functional but unclear. So this repo is mainly
examples found in the documentation with its filesystem refactored (for clarity) and in some cases, refactored js which might better reflect how it might be used in the wild (as opposed as just as code example).

All this is my learning curve in understanding how to extend the webinspector; expect ineffiencies etc.

Current examples are:

* Basic - Extends the developer tools, show relationship between background and devtools pages.
* Audit - Extends the Developer Tools, adding an audit category that finds broken links on the inspected page.
* ElementsSidebar - Extends the Developer Tools, adding a sidebar that displays WAI-ARIA information about the inspected element.
* Panel - Example of how to add a panel to web inspector and retrieve and render information about the inspected window.

## Usage:

Make sure that the 'Experimental Extensions API' is enabled in the 'chrome://flags/' page.
Load the extensions page and load an extension by clicking on the 'Load unpacked extension' - select the extension directory to choose the extension to load e.g the ElementsSidebar directory.