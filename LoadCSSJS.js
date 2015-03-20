var els = "";

function LoadCSSJS(e, t, m) {

	"use strict";
	
	if (els.indexOf("["+e+"]") == -1) {
		Loader(e, t, m);
		els += "["+e+"]";
	}
	else
		alert("File "+e+" already added!");
	
}
function Loader(e, t, m){

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
		var a = document.getElementsByTagName("head");
		a = a[a.length-1];
		a.appendChild(s,a);
	}

}
