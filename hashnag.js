// HashNag.js

if (document.domain == "facebook.com") {
  var stripHashFacebook = function() {
    $("#timeline_tab_content").unbind("DOMSubtreeModified");
    var uri = $('a._58cn').attr('href');
    $('a._58cn').replaceWith('<a href="' + uri  + '">.</a>');
    $("#timeline_tab_content").bind("DOMSubtreeModified", stripHashFacebook);
  });
  stripHashFacebook();
}

if (document.domain == "www.instagram.com") {
  var stripHashInstagram = function() {
    $("body").unbind("DOMSubtreeModified");
    $('article ul li._nk46a a').each(function() {
      var hashClassCheck = $(this).attr("class");
      if ($(this).attr('href').indexOf("/explore/tags/") > -1
          && typeof hashClassCheck === 'undefined') {
        var uri = $(this).attr('href');
        $(this).replaceWith('<a href="' + uri  + '">.</a>');
      }
    });
    $("body").bind("DOMSubtreeModified", stripHashInstagram);
  };
  stripHash();
}
