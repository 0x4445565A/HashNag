// HashNag.js

if (document.domain == "facebook.com") {
  $("#timeline_tab_content").bind("DOMSubtreeModified", function() {
    var uri = $('a._58cn').attr('href');
    $('a._58cn').replaceWith('<a href="' + uri  + '">.</a>');
  });
}

if (document.domain == "www.instagram.com") {
  var stripHash = function() {
    $("body").unbind("DOMSubtreeModified");
    $('article ul li._nk46a a').each(function() {
      var hashClassCheck = $(this).attr("class");
      if ($(this).attr('href').indexOf("/explore/tags/") > -1
          && typeof hashClassCheck === 'undefined') {
        var uri = $(this).attr('href');
        $(this).replaceWith('<a href="' + uri  + '">.</a>');
      }
    });
    $("body").bind("DOMSubtreeModified", stripHash);
  };
  stripHash();
}
