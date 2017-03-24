<<<<<<< HEAD
exports.principal = function() {
    console.log("ESTÁ A FUNCIONAR CARALHO");
    console.log("123");
=======
var layout = require("ui/layouts/stack-layout");
var webviewModule = require("ui/web-view");
var page;

exports.principal = function(args) {
    console.info("ESTÁ A FUNCIONAR CARALHO.");
    page = args.object;

    var newStackLayout = new layout.StackLayout();
    var webView1 = new webviewModule.WebView();

    webView1.url = "https://www.sendysexplorer.com/";

    newStackLayout.addChild(webView1);

    page.content = newStackLayout;

>>>>>>> refs/remotes/origin/master
}