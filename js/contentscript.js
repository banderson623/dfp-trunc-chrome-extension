console.log('Hello, world! This is the Chrome Extension Template speaking.');

// ==================================
// STORAGE
// ==================================
chrome.storage.local.get('count', function(data) {
    var count = 1;
    if (data.count) {
        count = data.count + 1;
    }
    console.log('You have loaded ' + count + ' web page(s) since you have installed the Chrome Extension Template.');
    chrome.storage.local.set({ 'count': count });
});