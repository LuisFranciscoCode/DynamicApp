var layout = require("ui/layouts/stack-layout");
var webviewModule = require("ui/web-view");
var frameModule = require("ui/frame");
var webView1 = new webviewModule.WebView();
var page;



exports.web = function(args) {
    console.info("ESTÁ A FUNCIONAR CARALHO.");
    page = args.object;
    var topmost = frameModule.topmost();
    var newStackLayout = new layout.StackLayout();

    webView1.url = "http://www.alidata.pt/";
    page.getViewById("pesquisaWeb").text=webView1.url;
    newStackLayout.addChild(webView1);

    page.content = newStackLayout;
}

exports.browse = function() {
    webView1.url = page.getViewById("pesquisaWeb").text;
}