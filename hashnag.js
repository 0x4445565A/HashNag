// HashNag.js

if (document.domain == "facebook.com") {
  $("#timeline_tab_content").bind("DOMSubtreeModified", function() {
    var uri = $('a._58cn').attr('href');
    $('a._58cn').replaceWith('<a href="' + uri  + '">.</a>');
  });
}

if (document.domain == "www.instagram.com") {
  console.log('whaaaaaaat');
  /*$("body").bind("DOMSubtreeModified", function() {
    $('._nk46a a:not(._4zhc5)').remove();
    /*$('._nk46a a').each(function() {
      if ($(this).text().charAt(0) == "#") {
        $(this).replaceWith('');
      }
    });*/
    //$('a._58cn').replaceWith('<a href="' + uri  + '">.</a>');
  });

}
