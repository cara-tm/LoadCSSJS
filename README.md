# LoadCSSJS
==========

### Simple CSS or JS loader asynchronously for all browsers by cara-tm.com, MIT Licence

Very light: only 0.65 kb (LoadCSSJS.min.js). Pure vanilla javascript, libraries independent. Can be incorporated into &lt;head&gt; or just before the last &lt;/body&gt; tag. Useful for RWD. Tested in IE 5.x and all browsers. For CSS files: split your CSS into 2 files, one for "Above The Fold" included into your HTML document; the second one loaded with this little tool.

CSS links are always included asynchronously into HTML document before all scripts, if present into the head part (for best practices).

Usage syntax:

    /*! Load styles: LoadCSSJS("file", "css", "media properties|all") */
    
    /*! Load javascript: LoadCSSJS("file", "js") */

Examples:

    LoadCSSJS("../css/main.min.css", "css", "all");
    LoadCSSJS("../js/initial.js", "js");

With CSS: Don't forget to add a fallback within your HTML document:
i.e.

    <noscript><link rel="stylesheet" href="../css/main.min.css"></noscript>

For best old browsers compatibility, include this script into your HTML document, then call your external CSS file(s) just after it.
