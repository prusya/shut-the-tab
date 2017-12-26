chrome.tabs.onUpdated.addListener(function (id, obj, tab) {
  if (obj.url === undefined || obj.url === "") {
    return
  }
  chrome.storage.sync.get("pattern", function (store) {
    if (store.pattern === undefined || store.pattern === "") {
      return
    }
    var re = new RegExp(store.pattern, "i");
    if (re.test(obj.url)) {
      chrome.tabs.remove(id, function () {});
    }
  });
})

chrome.tabs.onCreated.addListener(function (tab) {
  setTimeout(function() {
    chrome.tabs.get(tab.id, function(waitedTab){
      if (waitedTab.url === undefined || waitedTab.url === "") {
        return
      }
      chrome.storage.sync.get("pattern", function (store) {
        if (store.pattern === undefined || store.pattern === "") {
          return
        }
        var re = new RegExp(store.pattern, "i");
        if (re.test(waitedTab.url)) {
          chrome.tabs.remove(waitedTab.id, function () {});
        }
      });
    })
  }, 500)
})

