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
    var buttonFormJsonColors = new buttonModule.Button();
    var buttonFormInsertColors = new buttonModule.Button();

    var topmost = frameModule.topmost();

    buttonWebView.text = "Open WebView";
    buttonWebView.on(buttonModule.Button.tapEvent, function() {
        topmost.navigate("views/web-view/web");

    });

    buttonListView.text = "Open ListView";
    buttonListView.on(buttonModule.Button.tapEvent, function() {
       topmost.navigate("views/list-view/list");
    });

    buttonFormJsonColors.text = "Open Form Json Colors";
    buttonFormJsonColors.on(buttonModule.Button.tapEvent, function() {
        topmost.navigate("views/formJsonColors-view/form");
    });

    buttonFormInsertColors.text = "Manager Colors";
    buttonFormInsertColors.on(buttonModule.Button.tapEvent, function() {
        topmost.navigate("views/managerColors-view/managerColors");
    });

    newStackLayout.addChild(buttonWebView);
    newStackLayout.addChild(buttonListView);
    newStackLayout.addChild(buttonFormJsonColors);
    newStackLayout.addChild(buttonFormInsertColors);

    page.content = newStackLayout;

}