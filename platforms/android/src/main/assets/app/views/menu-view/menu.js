var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var frameModule = require("ui/frame");
var page;

exports.principal = function(args) {
    page = args.object;

    var newStackLayout = new layout.StackLayout();
    var buttonWebView = new buttonModule.Button();
    var buttonListView = new buttonModule.Button();
    var buttonCreateForm = new buttonModule.Button();
    var topmost = frameModule.topmost();

    buttonWebView.text = "Open WebView";
    buttonWebView.on(buttonModule.Button.tapEvent, function() {
        topmost.navigate("views/web-view/web");

    });

    buttonListView.text = "Open ListView";
    buttonListView.on(buttonModule.Button.tapEvent, function() {
       topmost.navigate("views/list-view/list");
    });

    buttonCreateForm.text = "Open Form Creator";
    buttonCreateForm.on(buttonModule.Button.tapEvent, function() {
       topmost.navigate("views/formcreate/create");
    });

    newStackLayout.addChild(buttonWebView);
    newStackLayout.addChild(buttonListView);
    newStackLayout.addChild(buttonCreateForm);

    page.content = newStackLayout;
}