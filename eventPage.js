// register contextmenu listener to chrome when it is launched
chrome.runtime.onInstalled.addListener(()=>{
    chrome.contextMenus.create({
        id: 'clickObject',
        title: 'Add event to calendar',
        type: 'normal',
        contexts: ['selection']
    });
});
// when contextmenu listener detects a click,
// execute the following actions:
chrome.contextMenus.onClicked.addListener(
    (info) => {
        chrome.tabs.create({
            url: 'https://google.com/search?q=' + encodeURIComponent(info.selectionText)
        });
    });


