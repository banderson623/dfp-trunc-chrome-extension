console.log('DFP Truncation Extension is loading...', jQuery);

jQuery(function($){
  var $script = $('script[src*="gampad"]');
  if($script.length){
    var request = $script.attr('src');
    var truncated = request.indexOf('trunc') > 0;
    chrome.runtime.sendMessage(
      {"truncated": truncated,
       "length": request.length,
       "request": request,
       "url": location.href
    },
      function(response) {
        console.log(response);
      });
  }
});