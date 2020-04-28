// ferret One の計測タグを発火させない Chrome 拡張機能
//
// ref: https://developer.chrome.com/extensions/webRequest
// ref: https://developer.chrome.com/extensions/browserAction

var enabled = false;

function setBadge() {
  if (enabled) {
    chrome.browserAction.setBadgeText({text: 'DNT'});
    chrome.browserAction.setBadgeBackgroundColor({color: '#ff2222'});
  } else {
    chrome.browserAction.setBadgeText({text: ''});
  }
}

chrome.runtime.onInstalled.addListener(
  function () {
    chrome.storage.local.get('enabled', function(result) {
      if (result.enabled === undefined) {
        enabled = true
        chrome.storage.local.set({'enabled': enabled});
      } else {
        enabled = result.enabled
      }
      setBadge()
    });
  }
);

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (enabled && details.url.includes('mktr.js')) {
      return { cancel: true }
    }
  },
  {urls: ['https://ferret-one.akamaized.net/*'], types: ['script']},
  ['blocking']
);

chrome.browserAction.onClicked.addListener(
  function(tab) {
    enabled = !enabled;
    chrome.storage.local.set({'enabled': enabled});
    setBadge()
  }
);