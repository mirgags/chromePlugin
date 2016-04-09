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
