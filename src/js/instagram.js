var Instafeed = require("instafeed.js");

var feed = new Instafeed({
    get: "user",
    userId: "344919110",
    clientID: "87b69683000a43009903ef1751723ec6",
    accessToken: "344919110.87b6968.1690446024e2403ea56bc212c5b18b68",
    resolution: "low_resolution",
    limit: 18,
    template: "<a href=\"{{link}}\" class=\"instafeed__image\"><img src=\"{{image}}\"></a>"
});
feed.run();

// instagram.com/oauth/authorize/?client_id=87b69683000a43009903ef1751723ec6&redirect_uri=http://barberwild.com/&response_type=token&scope=public_content