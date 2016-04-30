var lastTabId = -1;

function openTab(callback) {
  chrome.tabs.create({"url": "index.html",
                      "active": true}, function(tab) {
    chrome.tabs.update(tabs[0].id, {});
  });
};

function sendMessage() {
  chrome.tabs.query({"active": true}, function(tabs) {
    tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, "Background page started.");
  });
};

function checkBathroom () {
  $("#flexbox-3 > div:contains('Occupied')").css("color", "red");
  $("#flexbox-3 > div:contains('Available')").css("color", "green");
};

chrome.browserAction.onClicked.addListener(function(tab) {
  openTab(funtion);
});
