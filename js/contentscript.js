console.log('Hello, world! This is the Chrome Extension Template speaking.');

// ============================================================
// STORAGE
// ------------------------------------------------------------
// https://developer.chrome.com/extensions/storage
// ============================================================
chrome.storage.local.get('count', function(data) {
    var count = 1;
    if (data.count) {
        count = data.count + 1;
    }
    console.log('You have loaded ' + count + ' web page(s) since you have installed the Chrome Extension Template.');
    chrome.storage.local.set({ 'count': count });
});

// ============================================================
// MESSAGE PASSING
// ------------------------------------------------------------
// https://developer.chrome.com/extensions/messaging
// ============================================================
chrome.runtime.sendMessage({ 'message': 'hello' }, function(response) {
    // To see how this message was handled, see js/background.js.
    console.log('The response from your message was: ' + response.message);
});