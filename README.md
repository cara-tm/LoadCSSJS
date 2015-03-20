# LoadCSSJS
==========

### Simple CSS or JS loader asynchronously for all browsers by cara-tm.com, MIT Licence

Very light: only 0.577 kb (LoadCSSJS.min.js: 0.665 kb with copyright notice). Pure vanilla javascript, libraries independent. Can be incorporated into &lt;head&gt; or just before the last &lt;/body&gt; tag. Useful for RWD. Tested in IE 5.x and all browsers. For CSS files: split your CSS into 2 files, one for "Above The Fold" included into your HTML document; the second one loaded with this little tool.

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

We do this because the [Google advice](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery) doesn't support multiple files.
