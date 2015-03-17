// ============================================================
// CONTEXT MENU
// ------------------------------------------------------------
// https://developer.chrome.com/extensions/contextMenus
// ============================================================
// chrome.contextMenus.create({
//     'title': 'Chrome Extension Template',
//     'contexts': ['page', 'selection', 'link', 'editable', 'image', 'video', 'audio'],
//     'onclick': function(info, tab) {
//         console.log('Right-Click Info');
//         console.log('-----------------');
//         console.log(info);
//         console.log(tab);
//         console.log('');
//     }
// });

// ============================================================
// MESSAGE PASSING
// ------------------------------------------------------------
// https://developer.chrome.com/extensions/messaging
// ============================================================
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    recordTruncationResult(request);
    console.log('Received a message!', request, sender);
  }
);

function recordTruncationResult(message){
  if(message.truncated){
    setTrunc();
  } else {
    setNonTrunc();
  }

  var key = 'dfp-trunc-history-v2';
  try{
    chrome.storage.local.get(key, function(history){
      if(history && history.length > 0){
        history = JSON.parse(history);
      } else {
        history = [];
      }
      history.push({'u':message.url,
                    'r':message.request,
                    'l':message.length,
                    't':message.truncated
                  });
      chrome.storage.local.set({key: JSON.stringify(history)});
    });
  }catch(e){
    console.log(e);
  }
}

/**
 * Will retrieve the active tab in the current window.
 * @param  { Function } callback The first and only parameter of the callback will be
 *                               the Tab object of the active tab in the current window.
 */

function setTrunc(){
  var iconPath = 'img/icon-trunc.png';
  chrome.browserAction.setIcon({path: iconPath});
}

function setNonTrunc(){
  var iconPath = 'img/icon.png';
  chrome.browserAction.setIcon({path: iconPath});
}

function getActiveTab(callback) {
  chrome.tabs.query({ 'active': true, 'currentWindow': true }, function(tabs) {
    callback(tabs[0]);
    console.log('getActiveTab', callback);
  });
}


