var Swiftype = window.Swiftype || {};
Swiftype.root_url = Swiftype.root_url || "//api.swiftype.com";
Swiftype.embedVersion = Swiftype.embedVersion || 'v1';
if (typeof Swiftype.renderStyle === 'undefined') {
  Swiftype.renderStyle = 'nocode';
}

Swiftype.isMobile = function() {
  var ua = window.navigator.userAgent;
  if(/iPhone|iPod/.test(ua) && ua.indexOf("AppleWebKit") > -1 ) {
    return true;
  }
  if (/Android/.test(ua) && /Mobile/i.test(ua) && ua.indexOf("AppleWebKit") > -1 ) {
    return true;
  }
  return false;
};

Swiftype.loadScript = function(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = url;

  var entry = document.getElementsByTagName('script')[0];
  entry.parentNode.insertBefore(script, entry);

  if (script.addEventListener) {
    script.addEventListener('load', callback, false);
  } else {
    script.attachEvent('onreadystatechange', function() {
      if (/complete|loaded/.test(script.readyState))
        callback();
    });
  }
};

Swiftype.loadStylesheet = function(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(link);
};

Swiftype.loadSupportingFiles = function(callback) {
  if (Swiftype.renderStyle === false) {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_no_render-d64ff99bb04d2df33fa9122e7aaa2966.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype-372b0eab2251b5551acc7e940f39a528.css");
  } else if (Swiftype.isMobile() && !Swiftype.disableMobileOverlay) {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_nocode-1e2450bb2c8ab71c76799ca74494b5c6.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype_nocode-862cc0feac61f00e170fbcc6360aeeb7.css");
  } else if (Swiftype.renderStyle === 'inline' || Swiftype.renderStyle === 'new_page') {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_onpage-af7cb4d104259bc906ca0a0c2cd9e51f.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype-372b0eab2251b5551acc7e940f39a528.css");
  } else {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_nocode-1e2450bb2c8ab71c76799ca74494b5c6.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype_nocode-862cc0feac61f00e170fbcc6360aeeb7.css");
  }
};

var Swiftype = (function(window, undefined) {
   if (Swiftype.embedVersion === 'v1') {
     Swiftype.loadSupportingFiles(function(){});
   }
   return Swiftype;
})(window);
