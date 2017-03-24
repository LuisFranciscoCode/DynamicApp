var layout = require("ui/layouts/stack-layout");
var textFieldModule = require("ui/text-field");
var buttonModule = require("ui/button");
var checkboxModule = require("nativescript-checkbox");
var page;

exports.createJSON = function(args) {
    page = args.object;

    var newStackLayout = new layout.StackLayout();
    var checkbox1 = new checkboxModule.CheckBox();
    var button1 = new buttonModule.Button();

    newStackLayout.addChild(checkbox1);
    newStackLayout.addChild(button1);

    page.content = newStackLayout;

}