var layout = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");
var frameModule = require("ui/frame");
var page;

exports.principal = function(args) {
    console.info("ESTÁ A FUNCIONAR !");
    page = args.object;

    var newStackLayout = new layout.StackLayout();
    var buttonWebView = new buttonModule.Button();
    var buttonListView = new buttonModule.Button();
    var buttonCreateJSONView = new buttonModule.Button();
    var buttonCheckbox = new buttonModule.Button();
    var buttonObservable = new buttonModule.Button();

    var topmost = frameModule.topmost();

    buttonWebView.text = "Open WebView";
    buttonWebView.on(buttonModule.Button.tapEvent, function() {
        topmost.navigate("views/web-view/web");

    });

    buttonListView.text = "Open ListView";
    buttonListView.on(buttonModule.Button.tapEvent, function() {
       topmost.navigate("views/list-view/list");
    });

    buttonCreateJSONView.text = "Open CreateJSON View";
    buttonCreateJSONView.on(buttonModule.Button.tapEvent, function() {
       topmost.navigate("views/createJSON-view/createJSON");
    });

    buttonCheckbox.text = "Open Checkbox testing";
    buttonCheckbox.on(buttonModule.Button.tapEvent, function() {
       topmost.navigate("views/checkbox-testing/checkbox");
    });

    buttonObservable.text = "Open Observable";
    buttonObservable.on(buttonModule.Button.tapEvent, function() {
       topmost.navigate("views/observable-testes/observable");
    });

    newStackLayout.addChild(buttonWebView);
    newStackLayout.addChild(buttonListView);
    newStackLayout.addChild(buttonCreateJSONView);
    newStackLayout.addChild(buttonCheckbox);
    newStackLayout.addChild(buttonObservable);

    page.content = newStackLayout;

}