var layout = require("ui/layouts/stack-layout");
var buttonModele = require("ui/button");
var frameModule = require("ui/frame");
var page;

exports.principal = function(args) {
    console.info("ESTÁ A FUNCIONAR CARALHO.");
    page = args.object;

    var newStackLayout = new layout.StackLayout();
    var buttonWebView = new buttonModele.Button();

    buttonWebView.text = " Open WebView";

    buttonWebView.on(buttonModele.Button.tapEvent, function() {
        var topmost = frameModule.topmost();
        topmost.navigate("views/web-view/web");

    });

    newStackLayout.addChild(buttonWebView);

    page.content = newStackLayout;

}