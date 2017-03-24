var layout = require("ui/layouts/stack-layout");
var webviewModule = require("ui/web-view");
var frameModule = require("ui/frame");
var page;



exports.web = function(args) {
    console.info("ESTÁ A FUNCIONAR CARALHO.");
    page = args.object;
    var newStackLayout = new layout.StackLayout();
    var webView1 = new webviewModule.WebView();

    webView1.url = "http://www.alidata.pt/";
    page.getViewById("pesquisaWeb").text=webView1.url;
    newStackLayout.addChild(webView1);

    page.content = newStackLayout;
}

exports.browse = function() {
    webView1.url = page.getViewById("pesquisaWeb").text;
}