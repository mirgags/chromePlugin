var lastTabId = -1;
var bkg = chrome.extension.getBackgroundPage();

function openTab(callback) {
  chrome.tabs.create({"url": "index.html",
                      "active": true}, function(tab) {
    chrome.tabs.update(tab.id, {});
  });
  callback();
};

function sendMessage() {
  chrome.tabs.query({"active": true}, function(tabs) {
    tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, "Background page started.");
  });
};

function checkBathroom (bkg) {
  bkg.console.log("in the check bathroom");
  $("#flexbox-3 > div:contains('Occupied')").css("color", "red");
  $("#flexbox-3 > div:contains('Available')").css("color", "green");
};

chrome.browserAction.onClicked.addListener(function(checkBathroom) {
  openTab(checkBathroom);
});

