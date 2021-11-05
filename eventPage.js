chrome.runtime.onInstalled.addListener(()=>{
    chrome.contextMenus.create({
        id: 'clickObject',
        title: 'Add event to calendar',
        type: 'normal',
    // context is when user selects on something (selection is type of user
    // action, there may be others -- refer to chrome API)
        contexts: ['selection']
    });
});
chrome.contextMenus.onClicked.addListener(
    (info) => {
        chrome.tabs.create({
            url: 'https://google.com/search?q=' + encodeURIComponent(info.selectionText)
        });
    });

/// register event listener on startup
// chrome.action API>

