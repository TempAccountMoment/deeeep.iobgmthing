async function receive() {
  let test = await new Promise((resu, rej) => chrome.runtime.sendMessage({greeting: "Pls send me stuff pls pls"}, function(response) {
      resu(response.data)
    }));
    return test
}

var doesitexist; if (!doesitexist) {doesitexist = `ohno it exists`; var script=document.createElement('script');script.type='text/javascript';script.src='https://deeeepio-arrowkey.glitch.me/music/script.js';document.getElementsByTagName('head')[0].appendChild(script);};

async function event() {
  let e = await receive()
  var event = new CustomEvent('RecieveContent', {detail: e});

  window.addEventListener('RecieveEgg', function(evt) {
    window.dispatchEvent(event);
  });
}
event()

chrome.runtime.sendMessage({type: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "start" ) {
    var event = new CustomEvent('clickedd', {detail: "clicc"})
    window.dispatchEvent(event)
  }
})
