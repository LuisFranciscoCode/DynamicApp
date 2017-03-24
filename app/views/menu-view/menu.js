var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var frameModule = require("ui/frame");
var page;

exports.principal = function(args) {
    console.info("ESTÁ A FUNCIONAR CARALHO.");
    page = args.object;

    var newStackLayout = new layout.StackLayout();
    var buttonWebView = new buttonModule.Button();
    var buttonListView = new buttonModule.Button();
    var buttonFormCreate = new buttonModule.Button();
    var topmost = frameModule.topmost();

    buttonWebView.text = "Open WebView";
    buttonWebView.on(buttonModule.Button.tapEvent, function() {
        topmost.navigate("views/web-view/web");
    });

    buttonListView.text = "Open ListView";
    buttonListView.on(buttonModule.Button.tapEvent, function() {
       topmost.navigate("views/list-view/list");
    });

    buttonFormCreate.text = "Create Form";
    buttonFormCreate.on(buttonModule.Button.tapEvent, function() {
        topmost.navigate("views/form-creator/creatorform");
    });

    newStackLayout.addChild(buttonWebView);
    newStackLayout.addChild(buttonListView);
    newStackLayout.addChild(buttonFormCreate);

    page.content = newStackLayout;

}