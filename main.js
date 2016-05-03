var lastTabId = -1;

function openTab(callback) {
  chrome.tabs.create({"url": "index.html",
                      "active": true}, function(tab) {
    chrome.tabs.update(tab.id, {});
    callback();
  });
};


chrome.browserAction.onClicked.addListener(function(tab) {
  openTab(function(response) {
    console.log("some test text");
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, callback) {
    console.log(request.greeting);
    callback();
  }
);
