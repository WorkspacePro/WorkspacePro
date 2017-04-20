// Sets chrome tabs.create Object
options = {};
options.url = chrome.extension.getURL("app/index.html");

// Opens Workspace Manager
chrome.tabs.create(options);