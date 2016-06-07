function checkBathrooms(callback) {
  chrome.tabs.sendMessage(
    chrome.tabs.getCurrent(callback);
  );
};

function checkBathroom ($) {
  $("#flexbox-3 > div:contains('Occupied')").css("color", "red");
  $("#flexbox-3 > div:contains('Available')").css("color", "green");
};

function hello() {
  chrome.runtime.sendMessage({greeting: "hello"}, checkBathroom);
};
$("#flexbox-3 > div:contains('Occupied')").css("color", "red");
hello();
