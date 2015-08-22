
var LoadCSSJS = function ( e, t, o ) {

	"use strict";

	var f="", s;

	if( f.indexOf("["+e+"]") == -1 ) {

		f += "["+e+"]";

		switch (t) {

			case "css" :
				s = document.createElement( "link" );
				s.rel = ( o.rel || "stylesheet" );
				s.href = e;
				s.media = ( o.media || "all" );
			break;

			case "js" :
				s = document.createElement( "script" );
				o.defer ? s.defer = "defer" : s.async = "async";
				s.type = "text/javascript";
				s.src = e;
			break;

		}

	}
	
	if ( "undefined" != typeof s ) {

		var a = document.getElementsByTagName( "script" )[0];
		a.parentNode.insertBefore(s, a);

	} else {

		alert( "File: \""+e+"\" already loaded (keep only one)!" );
	}
	
};
