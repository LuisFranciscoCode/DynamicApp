var layout = require("ui/layouts/stack-layout");
var buttonModele = require("ui/button");
var frameModule = require("ui/frame");
var page;

exports.principal = function(args) {
    console.info("ESTÁ A FUNCIONAR CARALHO.");
    page = args.object;

    var newStackLayout = new layout.StackLayout();
    var buttonWebView = new buttonModele.Button();
    var buttonListView = new buttonModele.Button();
    var topmost = frameModule.topmost();

    buttonWebView.text = "Open WebView";
    buttonWebView.on(buttonModele.Button.tapEvent, function() {
        topmost.navigate("views/web-view/web");

    });

    buttonListView.text = "Open ListView";
    buttonListView.on(buttonModele.Button.tapEvent, function() {
       topmost.naviate("views/list-view/list");
    });

    newStackLayout.addChild(buttonWebView);
    newStackLayout.addChild(buttonListView);

    page.content = newStackLayout;

}