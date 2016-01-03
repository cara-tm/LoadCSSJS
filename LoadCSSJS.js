/*! Simple CSS JS loader asynchronously for all browsers by cara-tm.com, MIT License */
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
				// Temporary invalid media query to load it async
				s.media = "only foo";
				setTimeout( function(){ s.media = ( o.media || "all" ); } );
			break;

			case "js" :
				s = document.createElement( "script" );
				if (o.defer)
					s.defer = "defer";
				else
					s.async = "async";
				s.src = e;
			break;

		}

	}
	
	if ( "undefined" != typeof s ) {

		var a = document.getElementsByTagName( "script" )[0];
		window.setTimeout(function() {
		t == "css" ? 
		document.getElementsByTagName("head")[0].appendChild(s) : 
		a.parentNode.insertBefore(s, a);
		}, 35);
		window.clearTimeout(a);

	} else {

		alert( "File: \""+e+"\" already loaded (keep only one)!" );
	}
	
};
