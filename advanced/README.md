# LoadCSSJS 
==========

## Advanced version

### Simple CSS or JS loader asynchronously for all browsers by cara-tm.com, MIT License

## Usage

Place the LoadCSSJS script in your HTML document. Best choice (but not only) is within your `<head>` part.

Then, invoque the loader:

    LoadCSSJS("PATH/TO/YOUR-FILE.EX", "css or js", { YOUR OPTIONS HERE, COMMA SEPARATED }); 

## Options

    min: (integer) The minimum screen width to load the file. i.e. min: "520". Default: "0".
    max: (integer) The maximun screen width to load the file. i.e. max: "320". Default: unset.
    delay: (integer) The delay for loading the file (in milliseconds). i.e. delay: 70. Default: 35.
    media: (string) The media properties for CSS files only. i.e. media: "only screen". Default: all.
    load: (string) The async or defer attribute for JS files only. i.e. load: "defer". Default: async. 
    [Note: to reset this attribute, just use an empty option. i.e. load: ""]
    
##Examples

Load a CSS file for only small screens, 320px and below, with no delay:

    LoadCSSJS("../css/file.css", "css", {media: "only screen", max: "320", delay: 0});

Load a CSS file for all screen sizes, without any delay:

    LoadCSSJS("../css/default.css", "css", {delay: 0});

Load a JS file for screens size starting to 520px, asynchromously, with a 30 milliseconds delay:

    LoadCSSJS("../js/file.js", "js", {load: "async", delay: 30});
    
