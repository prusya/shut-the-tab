document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get("pattern", function (obj) {
    if (obj.pattern === undefined) {
      return
    }
    var patternInput = document.getElementById("pattern");
    patternInput.value = obj.pattern;
  });

  var saveButton = document.getElementById("save");
  saveButton.addEventListener("click", function () {
    var patternInput = document.getElementById("pattern");
    chrome.storage.sync.set({"pattern": patternInput.value}, function () {});
  });
});

