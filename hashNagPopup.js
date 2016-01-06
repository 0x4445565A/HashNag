var hashNagSetting;
chrome.storage.sync.get("hashNagSetting", function(obj) {
  hashNagSetting = obj.hashNagSetting;
  $('input[value="' + hashNagSetting + '"]').click();
});

$('input[type="radio"]').change(function() {
  chrome.storage.sync.set({
    hashNagSetting: $(this).val(),
  });
});