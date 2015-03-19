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
		document.getElementsByTagName("head")[0].appendChild(f);
		var s = document.getElementsByTagName("script");
		s.parentNode.insertBefore(f, s);
	}
	
	function toggle() {
		for (var e, t=0; t < a.length; ++t)
			a[t].e&&a[t].e.indexOf(href) > -1 && (e=!0);

		e || setTimeout(toggle)
	}
	
	var a = window.document.styleSheets;
	var i = window.document.getElementsByTagName("script")[0];
	r();

}
