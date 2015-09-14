# LoadCSSJS & LoadCSS
==========

### Simple CSS or JS loader asynchronously for all browsers by cara-tm.com, MIT License

Very light: only 0.436 kb (LoadCSSJS.min.js: 0.524 kb with copyright notice). Pure vanilla javascript, libraries independent. Can be incorporated into &lt;head&gt; or just before the last &lt;/body&gt; tag. Useful for RWD. Tested in IE 5.x and all browsers. For CSS files: split your CSS into 2 files, one for "Above The Fold" included into your HTML document; the second one loaded with this little tool.

CSS links are always included asynchronously into HTML document before all scripts, if present into the head part (for best practices).

Usage syntax:

    /*! Load styles: LoadCSSJS("file", "css", { empty|media: "media properties|all" }) */
    
    /*! Load javascript: LoadCSSJS("file", "js", { empty|defer|asyn: "defer|async"}) */

Note that each loading calls, the one after the other, determines the order of files added into your &lt;head&gt; document part. 

Examples:

    LoadCSSJS("../css/main.min.css", "css", { rel: "prefetch"});
    LoadCSSJS("../js/initial.js", "js", {defer: "defer"});
    LoadCSSJS("https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", "js", {});
    LoadCSSJS("../css/fonts-base64.min.css", "css", { rel: "stylesheet", media: "only screen" });

With CSS: Don't forget to add a fallback within your HTML document:
i.e.

    <noscript><link rel="stylesheet" href="../css/main.min.css"></noscript>

Check the test.html file to see it in action. Online live demo: [jsfiddle.net](http://jsfiddle.net/jdd6s1e3/4/)

### LoadCSS.min.js

If you don't need a javascript loader, use the [loadcss.min.js](https://github.com/cara-tm/LoadCSSJS/blob/master/loadcss.min.js) very light version of 0.239 kb instead (0.325 kb with copyright notice). Same usage (i.e.: `LoadCSS("../css/main.min.css", "only screen");`).
Tested successfully in Internet Explorer 5.5 (and above ;) ).

Example:

    LoadCSS("../css/main.min.css", "only screen");

Online live demo: [jsfiddle.net](http://jsfiddle.net/9ehh6xnx/)

We do this because the [Google advice](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery) doesn't support multiple files (code shown only for US visitors not for others).

### Advanced version

Here is an another version of LoadCSSJS with **support for browser windows width**: [jsfiddle.net](http://jsfiddle.net/wqysp5uf/3)


[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/cara-tm/loadcssjs/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

