var  bgp = chrome.extension.getBackgroundPage()

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('add')
  btn.addEventListener("click", broadcast)
})


function broadcast() {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
  })
}
