exports.handler = function(event, context) {

    var random = Math.floor(Math.random() * 1);
    var title;
    var image;
    var html = '<!DOCTYPE html><html><head><meta property="og:image" content="' + image + '" /><meta content=article property=og:type><meta property="og:title" content="' + title + '" /> <meta property="og:description" content="Link me in the comments to find out which dining venue you are!" /><style>body {background-color:black;}h1 {color:white; font-family:sans-serif;text-align:center;margin-top:150px;}</style></head><body><h1>Link me on Facebook to find out which Duke dining venue you are!</h1></body></html>';

    context.succeed(html);
};
