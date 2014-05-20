// ============================================================
// CONTEXT MENU
// ------------------------------------------------------------
// https://developer.chrome.com/extensions/contextMenus
// ============================================================
chrome.contextMenus.create({
    'title': 'Chrome Extension Template',
    'contexts': ['page', 'selection', 'link', 'editable', 'image', 'video', 'audio'],
    'onclick': function(info, tab) {
        console.log('Right-Click Info');
        console.log('-----------------');
        console.log(info);
        console.log(tab);
        console.log('');
    }
});

// ============================================================
// MESSAGE PASSING
// ------------------------------------------------------------
// https://developer.chrome.com/extensions/messaging
// ============================================================
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('Received a message!');
        sendResponse({ 'message': 'Hello there, fine fellow!' });
    }
);