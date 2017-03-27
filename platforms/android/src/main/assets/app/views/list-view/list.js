var layout = require("ui/layouts/stack-layout");
var listViewModule = require("ui/list-view");
var page;

exports.list = function(args) {
    page = args.object;

    var newStackLayout = new layout.StackLayout();
    var listView1 = new listViewModule.ListView();

    var valores = ["oi","como vai isso"];
    listView1.items = valores;

    newStackLayout.addChild(listView1);

    page.content = newStackLayout;

}