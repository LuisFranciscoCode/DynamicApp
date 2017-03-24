var layout = require("ui/layouts/stack-layout");
var webviewModule = require("ui/web-view");
var frameModule = require("ui/frame");
var page;

exports.web = function(args) {
    console.info("ESTÁ A FUNCIONAR CARALHO.");
    page = args.object;
    var topmost = frameModule.topmost();
    var newStackLayout = new layout.StackLayout();
    var webView1 = new webviewModule.WebView();

    page.actionBarHidden = true;

    webView1.url = "https://www.sendysexplorer.com/";

    newStackLayout.addChild(webView1);

    page.content = newStackLayout;

}