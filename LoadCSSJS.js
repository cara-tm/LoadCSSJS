function LoadCSSJS(e, t, m){

	"use strict";

	var ref = window.document.getElementsByTagName("script")[0];

	if (t == 'css') {
		var f=document.createElement('link');
		f.setAttribute("rel", "stylesheet");
    f.setAttribute("href", e);
    (m ? '' : m='all');
    f.setAttribute("media", m);
    f.setAttribute("type", "text/css");
	} else if (t == 'js') {
		var f = document.createElement('script');
		f.setAttribute("type", "text/javascript");
        f.setAttribute("src", e);
	}
	if (typeof f != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(f);
		ref.parentNode.insertBefore(f, ref);

		var sheets = window.document.styleSheets;
	}
	function toggles() {
		for(var e, t=0; t < sheets.length; ++t)
			sheets[t].e && sheets[t].e.indexOf(href) > -1 && (e =! 0);
			e || setTimeout(toggles)
	}
	toggles();
}
