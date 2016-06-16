var lastTabId = -1;
var bkg = chrome.extension.getBackgroundPage();

function openTab(callback) {
  chrome.tabs.create({"url": "index.html",
                      "active": true}, function(tab) {
    chrome.tabs.update(tab.id, {});
    if(callback) {
      return callback(tab);
    }
    else {
      return;
    };
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

httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://www.google.com/', true);
httpRequest.onreadystatechange = function() {

    if(httpRequest.readyState == 4) {
        if(httpRequest.status === 200) {
            console.log('Response received: ' + httpRequest.status);
        };
    }
    else {
    };
};

httpRequest.send();

chrome.browserAction.onClicked.addListener(function() {
  openTab();
});

checkBathroom();

