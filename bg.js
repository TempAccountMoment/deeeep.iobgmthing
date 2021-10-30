chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "Pls send me stuff pls pls")
      sendResponse({data: localStorage});
  }
);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(typeof message === 'object' && message.type === 'showPageAction') {
        chrome.pageAction.show(sender.tab.id);
    }
});
