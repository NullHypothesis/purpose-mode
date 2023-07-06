const extName = "Purpose Mode";

// Initialize storage variables at installation time.
chrome.runtime.onInstalled.addListener(init);

function init() {
    console.log("Initializing " + extName + " background script.");
}

function settingAutoPlay(site: string, toggled: boolean){
    console.log("Set autopaly on", site, "to", toggled);
    if (site.includes("Twitter")){
        chrome.storage.local.set({"SetTwitterAutoplay": toggled})
        .then(chrome.tabs.create({ url: "https://twitter.com/settings/autoplay"}));
    }
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.name !== "autoplay") {
        console.log("Ignoring non-autoplay event.");
        return;
    }

    console.log("UI wants the autoplay of " + msg.body.site +
                "' changed to '" + msg.body.state + "'.");
    settingAutoPlay(msg.body.site,msg.body.state);
    
})

export {};