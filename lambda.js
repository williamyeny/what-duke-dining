//https://kennbrodhagen.net/2016/01/31/how-to-return-html-from-aws-api-gateway-lambda/
var request = require('request');

exports.handler = function(event, context) {
  //maybe make the below 1 object instead of 2 arrays?
  var names = [
    "Au Bon Pain",
    "Brodhead Center Cafe",
    "Cafe Edens (Pitchforks)",
    "Divinity Cafe",
    "Freeman Center",
    "Ginger & Soy",
    "Gyotaku",
    "Il Forno",
    "JB's Roasts and Chops",
    "Joe Van Gogh",
    "Loop Pizza Grill",
    "Marketplace",
    "McDonald's",
    "Nasher Museum Cafe",
    "Panda Express",
    "Red Mango",
    "Saladelia Cafe at Perkins",
    "Tandoor",
    "The Farmstead",
    "The Skillet",
    "Trinity Cafe",
    "Twinnie's",
    "Washington Duke"
  ];
  var images = [
    "http://i.imgur.com/2v2aIla.jpg",
    "http://i.imgur.com/PoTTnuG.jpg",
    "http://i.imgur.com/XaN5Hak.jpg",
    "http://i.imgur.com/Labscxp.jpg",
    "http://i.imgur.com/9w1gon3.jpg",
    "http://i.imgur.com/HrjBLLH.jpg",
    "http://i.imgur.com/buyTNO8.jpg",
    "http://i.imgur.com/66Rjwdm.jpg",
    "http://i.imgur.com/x6iKEPC.jpg",
    "http://i.imgur.com/rXAMXIV.jpg",
    "http://i.imgur.com/WOTEm17.jpg",
    "http://i.imgur.com/EeuBe5N.jpg",
    "http://i.imgur.com/cs0Ocb1.jpg",
    "http://i.imgur.com/FX4mCek.jpg",
    "http://i.imgur.com/QWenare.jpg",
    "http://i.imgur.com/FLYus6k.jpg",
    "http://i.imgur.com/HlFBwGZ.jpg",
    "http://i.imgur.com/0C2gCxr.jpg",
    "http://i.imgur.com/o4JJQBq.jpg",
    "http://i.imgur.com/gaf8sWp.jpg",
    "http://i.imgur.com/8FyJj9G.jpg",
    "http://i.imgur.com/zV2ORoO.png",
    "http://i.imgur.com/r1qf9CA.jpg"
  ]
  var r = Math.floor(Math.random() * names.length);
  var title = "You are: " + names[r];
  var image = images[r];
  var html = '<!DOCTYPE html><html><head><meta property="og:image" content="' + image + '" /><meta content=article property=og:type><meta property="og:title" content="' + title + '" /> <meta property="og:description" content="Link me in the comments to find out which dining venue you are!" /><style>body {background-color:black;}h1 {color:white; font-family:sans-serif;text-align:center;margin-top:150px;}</style></head><body><h1>Link me on Facebook to find out which Duke dining venue you are!</h1></body></html>';


     var options = {
       url: 'https://graph.facebook.com/?id=https://ko7u9bit88.execute-api.us-east-1.amazonaws.com/prod&scrape=true',
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       json: {}
     };

     request(options, function(err, res, body) {
       if (res && (res.statusCode === 200 || res.statusCode === 201)) {
         console.log(body);
       }
     });


  context.succeed(html);
};
