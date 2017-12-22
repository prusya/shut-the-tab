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