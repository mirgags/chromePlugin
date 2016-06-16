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

httpRequest.open('GET', 'https://www.google.com/', true);
httpRequest.onreadystatechange = function() {
    var httpRequest = new XMLHttpRequest();
    if(httpRequest.readyState == 4) {
        if(httpRequest.status === 200) {
            console.log('Response received');
        };
    }
    else {
    };
};

httpRequest.send(null);

$("#flexbox-3 > div:contains('Occupied')").css("color", "red");
hello();
