# Basic
Simple example that uses logging information to show relationship and communication between background and devtools pages.
Created to help me understand the flow between the background and devtools pages and how to communicate commands between them.

## Usage
Load the extension in extension panel and expand it. Click on the pages/background.html link to inspect it. A web inspector panel will open.
Console.log statements from the background.html page can be seen in the console panel. Input the keyboard shortcut for webinspector while in the webinspector (CTRL/CMD + SHIFT + I).
Another web inspector panel will show up - this is for the devtools page and any console.log statements for the devtools page can be seen here.