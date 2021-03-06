/*! Simple CSS JS loader asynchronously for all browsers by cara-tm.com, MIT License */

var LoadCSSJS = function (e, t, o) {
  "use strict";

  var s,
    w = window.innerWidth;
  
  switch (t) {

    case "css" :
      s = document.createElement("link");
      s.rel = ( o.rel || "stylesheet" );
      s.href = e;
      s.media = ( o.media || "all");
    break;

    case "js":
      s = document.createElement ("script");
      if ( o.load == "defer")
        s.defer = true;
      if ( "undefined" != typeof o.load )
        s.async = false;
      else 
        s.async = true;
      s.type = "text/javascript";
      s.src = e;
    break;
  }

  if ("undefined" != typeof s) {

    var a = document.getElementsByTagName ( "script" ) [0];
    if ( (o.max && w <= o.max) || (o.min && w > o.min) ) {
      window.setTimeout( function() {
        if ( t == "js" )
          document.getElementsByTagName("head")[0].appendChild(s);
        else 
          a.parentNode.insertBefore ( s, a );
      },
        ( o.delay || 35 )
      );
      window.clearTimeout (a);
    }

  }
};
