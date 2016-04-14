function checkUrl(callback) {
  var currentTab = chrome.tabs.getCurrent();
  var curTabUrl = currentTab.url;
  if(curTabUrl.length > 0) {
    callback();
  }
  else {
    break;
  };
};
console.log("hi concole I'm an extension");
chrome.tabs.create({"url": "./index.html"});
