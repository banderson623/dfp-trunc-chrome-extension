// ==================================
// CONTEXT MENU
// ==================================
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