# LoadCSSJS
==========

### Simple CSS or JS loader asynchronously for all browsers by cara-tm.com, MIT License

Very light: only 0.569 kb (LoadCSSJS.min.js: 0.657 kb with copyright notice). Pure vanilla javascript, libraries independent. Can be incorporated into &lt;head&gt; or just before the last &lt;/body&gt; tag. Useful for RWD. Tested in IE 5.x and all browsers. For CSS files: split your CSS into 2 files, one for "Above The Fold" included into your HTML document; the second one loaded with this little tool.

CSS links are always included asynchronously into HTML document before all scripts, if present into the head part (for best practices).

Usage syntax:

    /*! Load styles: LoadCSSJS("file", "css", "media properties|all") */
    
    /*! Load javascript: LoadCSSJS("file", "js") */

Note that each loading calls, the one after the other, determines the order of files added into your &lt;head&gt; document part. 

Examples:

    LoadCSSJS("../css/main.min.css", "css", "all");
    LoadCSSJS("../js/initial.js", "js");
    LoadCSSJS("../css/fonts-base64.min.css", "css", "only screen");

With CSS: Don't forget to add a fallback within your HTML document:
i.e.

    <noscript><link rel="stylesheet" href="../css/main.min.css"></noscript>

Check the test.html file to see it in action.

### LoadCSS.min.js

If you don't need a javascript loader, use the LoadCSS.min.js very light version of 0.385 kb instead (0.471 kb with copyright notice). Same usage, but the "type" (second) attribut isn't supported (i.e.: `LoadCSS("../css/main.min.css", "only screen");`) and do not prevent multiple same files loading (no warning messages). 

We do this because the [Google advice](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery) doesn't support multiple files (code shown only for US visitors not for others).
