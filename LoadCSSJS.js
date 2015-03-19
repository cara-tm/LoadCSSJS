function LoadCSSJS(e, t, m){

	"use strict";

	if (t == "css") {
		var f=document.createElement("link");
		f.setAttribute("rel", "stylesheet");
    		f.setAttribute("href", e);
    		(m ? "" : m="all");
    		f.setAttribute("media", m);
    		f.setAttribute("type", "text/css");
	} else if (t == "js") {
		var f = document.createElement("script");
		f.setAttribute("type", "text/javascript");
        	f.setAttribute("src", e);
	}
	if (typeof f != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(f);
		var s = document.getElementsByTagName("script");
		s = s[s.length - 1];
		s.parentNode.insertBefore(f, s);
	}

}
