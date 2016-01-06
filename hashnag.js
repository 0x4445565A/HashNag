// HashNag.js
var main = function() {
  if (hashNagSetting == "allow") {
    // Why would you do this...
    return;
  }
  if (document.domain == "facebook.com") {
    var stripHashFacebook = function() {
      $("body").unbind("DOMSubtreeModified");
      switch (hashNagSetting) {
        case 'remove':
          $('a._58cn').remove();
          break;
        case 'delink':
          $('a._58cn').each(function() {
            var text = $(this).text().replace('#','');
            $(this).replaceWith(text);
          });
          break;
        default:
          var uri = $('a._58cn').attr('href');
          $('a._58cn').replaceWith('<a href="' + uri  + '">.</a>');
      }
      $("body").bind("DOMSubtreeModified", stripHashFacebook);
    };
    stripHashFacebook();
  }

  if (document.domain == "www.instagram.com") {
    var stripHashInstagram = function() {
      $("body").unbind("DOMSubtreeModified");
      $('article ul li._nk46a a:not(.processed)').each(function() {
        var hashClassCheck = $(this).attr("class");
        if ($(this).attr('href').indexOf("/explore/tags/") > -1
            && typeof hashClassCheck == 'undefined') {
          switch (hashNagSetting) {
            case 'remove':
              $(this).hide();
              break;
            case 'delink':
              var text = $(this).text().replace('#','');
              $(this).text(text);
              
              break;
            default:
              $(this).text('.');
          }
        }
      });
      $("body").bind("DOMSubtreeModified", stripHashInstagram);
    };
    stripHashInstagram();
  }


  if (document.domain == "twitter.com") {
    var stripHashTwitter = function() {
      $("body").unbind("DOMSubtreeModified");
      $('a.twitter-hashtag').each(function() {
        switch (hashNagSetting) {
          case 'remove':
            $(this).hide();
            break;
          case 'delink':
            var text = $(this).text().replace('#','');
            $(this).replaceWith(text);
            break;
          default:
            var uri = $(this).attr('href');
            $(this).replaceWith('<a href="' + uri  + '">.</a>');
        }

      });
      $("body").bind("DOMSubtreeModified", stripHashTwitter);
    };
    stripHashTwitter();
  }
}

var hashNagSetting;
chrome.storage.sync.get("hashNagSetting", function(obj) {
  hashNagSetting = obj.hashNagSetting;
  main();
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.storage.sync.get("hashNagSetting", function(obj) {
    hashNagSetting = obj.hashNagSetting;
  });
  setTimeout(main, 500);
});