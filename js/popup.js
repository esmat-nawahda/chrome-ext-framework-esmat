//Messages from the dispatcherPage
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "hover") {
    message.innerText = "Images over";
    content.innerHTML += request.source;
  }
  else if (request.action == "out") {
    message.innerText = "Image out";
    content.innerHTML += (request.source);
  }
});



// What to run on loading the window
function onWindowLoad() {

  var message = document.querySelector('#message');
  var content = document.querySelector('#content');

  chrome.tabs.executeScript(null, {
    file: "js/dispatcherPage.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;